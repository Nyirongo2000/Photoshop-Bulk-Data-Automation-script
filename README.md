# Photoshop Data Fusion - Photoshop Bulk Data Automation script
---

A powerful Photoshop script for automating bulk data entry and document generation. This script allows you to create multiple variations of a Photoshop document by injecting data from a CSV file into specific layers.

## How It Works

The script reads data from a CSV file and injects it into predefined layers in your Photoshop document. This is perfect for:

- Generating multiple certificates
- Creating personalized invitations
- Producing bulk name tags
- Making custom business cards
- Any task requiring multiple variations of the same design

## Data Source (`honorees.csv`)

The CSV file should be formatted as follows:

```csv
Name,Gender,Title
John Doe,his,Master of Unity
Jane Doe,her,Delegate of Defense
```

Requirements for the CSV file:

- First row must contain headers
- Each subsequent row represents one document variation
- Values should not contain commas
- File must be saved in UTF-8 encoding

## Modifying Data and Adding Fields

### Adding New Data Fields

1. **Update the CSV File**:

   - Add new columns to your CSV file
   - Example with additional fields:
     ```csv
     Name,Gender,Title,Department,Date,Location,Signature
     John Doe,his,Master of Unity,Engineering,2024-03-15,New York,John Smith
     Jane Doe,her,Delegate of Defense,Marketing,2024-03-15,Los Angeles,Jane Smith
     ```

2. **Update the Photoshop Template**:

   - Add new text layers in your Photoshop template
   - Name the layers exactly as your CSV headers
   - Example layer structure:
     ```
     Details/
     ├── Name
     ├── Gender
     ├── Title
     ├── Department
     ├── Date
     ├── Location
     └── Signature
     ```

3. **Modify the Script**:
   - The script automatically reads all columns from the CSV
   - No script modification needed for additional fields
   - Each field will be injected into its corresponding layer

### Data Formatting Tips

1. **Dates**:

   - Use consistent date formats (YYYY-MM-DD recommended)
   - Example: `2024-03-15`

2. **Numbers**:

   - Use standard number formats
   - Example: `1234.56`

3. **Special Characters**:

   - Avoid using commas in values
   - Use UTF-8 encoding for special characters
   - Example: `Dr. José García`

4. **Conditional Text**:
   - Use specific values for conditional formatting
   - Example: `his/her` for gender-specific text

### Advanced Data Handling

1. **Multiple Values in One Field**:

   - Use a separator (e.g., semicolon) for multiple values
   - Example: `Department:Engineering;Location:New York`

2. **Dynamic Content**:

   - Use placeholders for dynamic content
   - Example: `{current_date}` for automatic date insertion

3. **Formatting Rules**:
   - Add formatting rules in the script
   - Example: Capitalize names, format dates

### Best Practices

1. **Data Validation**:

   - Ensure all required fields are present
   - Check for consistent data formats
   - Validate against expected values

2. **Template Testing**:

   - Test with a small sample of data first
   - Verify all fields display correctly
   - Check text overflow and formatting

3. **Backup and Version Control**:
   - Keep backup copies of your CSV files
   - Use version control for template files
   - Document any custom modifications

## Photoshop Template Setup

Your Photoshop template must contain specific layer names that match your data columns. For example:

- A layer set named "Details" containing:
  - Text layers named according to your CSV headers
  - Any additional layers needed for your design

![Template Example](/screenshots/template.png)

## Running the Script

To use the script:

1. Open your Photoshop template
2. Navigate to `File` > `Scripts` > `Browse`
3. Select the script file (`psd-data-fusion.jsx`)
you can also twick the script > sceipt event manager but its not that neccesary

The script will:

1. Read the CSV file
2. Generate a document for each row of data
3. Save the documents in your specified format (PDF by default)

## Customization

The script can be easily modified to:

- Change the output format (PDF, PNG, JPG, etc.)
- Modify the naming convention for saved files
- Add conditional logic based on data values
- Include additional data processing

also eddit this part: to suit your design needs

if (honouree.gender === "his")
    roleLayer.textItem.contents =
      "if her , this words display";
  else
    roleLayer.textItem.contents =
      "If him this words display";

  savePDF(honouree.name);
}

## Use Cases

This script is ideal for:

### Educational & Professional

- Generating academic certificates and diplomas
- Creating graduation name cards and programs
- Producing workshop completion certificates
- Making professional certification documents
- Designing employee ID cards and badges
- Creating training completion certificates

### Events & Marketing

- Designing personalized event invitations
- Creating conference name tags and badges
- Producing wedding place cards and programs
- Making personalized greeting cards
- Designing promotional vouchers and coupons
- Creating membership cards and passes

### Business & Corporate

- Generating personalized business cards
- Creating employee award certificates
- Designing company ID cards
- Making personalized letterheads
- Producing branded gift certificates
- Creating customer loyalty cards

### Creative & Design

- Designing personalized art prints
- Creating custom photo frames
- Making personalized bookmarks
- Producing custom labels and stickers
- Designing personalized calendars
- Creating custom postcards

### Digital & Print Media

- Generating social media graphics
- Creating personalized email headers
- Designing custom website banners
- Making personalized digital ads
- Producing print-ready flyers
- Creating custom packaging designs

### Specialized Applications

- Medical: Patient ID cards, prescription labels
- Real Estate: Property flyers, agent cards
- Retail: Price tags, product labels
- Hospitality: Room keys, menu cards
- Sports: Team certificates, player cards
- Non-profit: Donor certificates, volunteer badges

For more information about Photoshop scripting, refer to the [Adobe Photoshop Scripting Documentation](https://www.adobe.com/devnet/photoshop/scripting.html).
# Photoshop-Bulk-Data-Automation-script
