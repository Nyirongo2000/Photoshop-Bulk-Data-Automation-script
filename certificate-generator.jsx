//PSD Data Fusion - Photoshop Bulk Data Automation script
// by Oliver Nyirongo
// https://github.com/Nyirongo2000
// 2025

(function main() {
  var honourees = loadCSV("honourees.csv");

  for (var i = 0; i < honourees.length; i++) {
    var honouree = honourees[i];
    if (honouree.name !== "") processHonouree(honouree);
  }
})();

function processHonouree(honouree) {
  var doc = app.activeDocument;
  var Details = doc.layerSets.getByName("Details");
  var nameLayer = Details.layers.getByName("Name");
  var capacityLayer = Details.layers.getByName("Capacity");
  var roleLayer = Details.layers.getByName("Role");

  nameLayer.textItem.contents = honouree.name;
  capacityLayer.textItem.contents = honouree.capacity;

  if (honouree.gender === "his")
    roleLayer.textItem.contents = "if her , this words display";
  else roleLayer.textItem.contents = "If him this words display";

  savePDF(honouree.name);
}

function loadCSV(relPath) {
  try {
    var script = new File($.fileName);
    var csvFile = new File(script.path + "/" + relPath);

    if (!csvFile.exists) {
      alert("CSV file not found: " + relPath);
      return [];
    }

    csvFile.open("r");
    var content = csvFile.read();
    csvFile.close();

    var lines = content.split("\n");
    var honourees = [];

    // Skip header row and process data
    for (var i = 1; i < lines.length; i++) {
      if (!lines[i]) continue;

      var line = String(lines[i]).replace(/^\s+|\s+$/g, "");
      if (line === "") continue;

      var values = line.split(",");
      if (values.length >= 3) {
        honourees.push({
          name: String(values[0]).replace(/^"|"$/g, ""),
          gender: String(values[1]).replace(/^"|"$/g, ""),
          capacity: String(values[2]).replace(/^"|"$/g, ""),
        });
      }
    }

    return honourees;
  } catch (e) {
    alert("Error reading CSV file: " + e);
    return [];
  }
}

function savePDF(name) {
  var doc = app.activeDocument;

  var file = new File(doc.path + "/Certificates/" + name + ".pdf");
  var opts = new PDFSaveOptions();
  opts.jpegQuality = 7;
  opts.optimizeForWeb = true;
  opts.preserveEditing = false;

  doc.saveAs(file, opts, true);
}
