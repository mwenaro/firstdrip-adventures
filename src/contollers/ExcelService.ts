import * as XLSX from "xlsx";

export class ExcelService {
  /**
   * Generates an Excel file with a title in row 1 and headers in row 3.
   */
  static generateExcel(title: string, columns: string[]) {
    if (!Array.isArray(columns) || columns.length === 0) {
      throw new Error("Invalid fields array");
    }

    const worksheetData: any[] = [];

    // Add title row (Row 1)
    worksheetData.push([title]);

    // Add empty row (Row 2) for spacing
    worksheetData.push([]);

    // Add headers (Row 3)
    worksheetData.push(columns);

    // Convert data to worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Adjust column widths (Optional)
    worksheet["!cols"] = columns.map(() => ({ wch: 20 }));

    // Create workbook and append worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${title} Sheet`);

    // Generate Excel buffer
    return XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
  }

  /**
   * Extracts data from an uploaded Excel file and converts it into JSON objects.
   */
  static extractDataFromExcel2(fileBuffer: Buffer) {
    // Read the workbook from buffer
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });

    // Get the first sheet name
    const sheetName = workbook.SheetNames[0];

    if (!sheetName) {
      throw new Error("No sheet found in the uploaded file.");
    }

    // Get the worksheet
    const worksheet = workbook.Sheets[sheetName];

    // Convert worksheet to JSON with raw data
    const rawData: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    if (rawData.length < 3) {
      throw new Error("Invalid Excel structure. Headers should be in row 3.");
    }

    // Extract headers from Row 3
    const headers = rawData[2];

    // Convert remaining rows into JSON objects
    const jsonData = rawData.slice(3).map((row) =>
      headers.reduce((obj, key, index) => {
        obj[key] = row[index] || ""; // Assign value, default to empty string if undefined
        return obj;
      }, {} as Record<string, any>)
    );

    return jsonData;
  }

  static async extractData(file: File) {
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Read workbook
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0]; // Read first sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to array
    const rows: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Ensure the file has at least 3 rows
    if (rows.length < 3) {
      throw new Error(
        "Excel file must have at least 3 rows (title, headers, data)."
      );
    }

    // Extract headers from row 3 (index 2)
    const headers = rows[2].map((h: any) => h.toString().trim());

    // Extract data starting from row 4 (index 3)
    const formattedData = rows
      .slice(3)
      .map((row) =>
        Object.fromEntries(
          headers.map((key: any, index: any) => [key, row[index] || ""])
        )
      );

    return {
      headers,
      data: formattedData,
    };
  }
}
