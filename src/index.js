
  const initialData1 = {};
  const initialData2 = {};

  

  const table1 = new DataTable("#table1", {
    data: initialData1,
    paging: false,
    fixedHeader: true,
    scrollCollapse: true,
    scrollY: "400px",
    info: false,
    order: [[0, 'desc']],
    columns: [{
      title: "Order",
      data: "fieldData.__kp_Order"
    },{
      "className": 'options',
      "data": null,
      "render": function(row) {
        return '<button class="btn btn-mini btn-primary pull-right" onclick="callFM(\'' +
          row.fieldData.recordId +
          '\');">Add</button>';
      }
    }]
  });


    // Add inputmode attribute to the search input
    $('input[type="search"]').attr('inputmode', 'numeric');

  const table2 = new DataTable("#table2", {
    data: initialData2,
    paging: false,
    fixedHeader: true,
    scrollCollapse: true,
    scrollY: "400px",
    info: false,
    order: [[0, 'desc']],
    columns: [{
      title: "Order",
      data: "fieldData.__kp_Order"
    },{
      "className": 'options',
      "data": null,
      "render": function(row) {
        return '<button class="btn btn-mini btn-primary pull-right" onclick="callFMView(\'' +
          row.fieldData.recordId +
          '\');">View</button>';
      }
    }]
  });

    // Add inputmode attribute to the search input
    $('input[type="search"]').attr('inputmode', 'numeric');


  window.callFM = function (result) {
    const build = {
      recordId: result,
      mode: "add"
    };

    FileMaker.PerformScript("SHP_G002 - order ship photo", JSON.stringify(build));
  };

  window.callFMView = function (result) {
    const build = {
      recordId: result,
      mode: "view"
    };

    FileMaker.PerformScript("SHP_G002 - order ship photo", JSON.stringify(build));
  };


  // Function to update all data
  window.updateAllDataTable1 = function (newData) {
    const parsedData = JSON.parse(newData);
    table1.clear(); // Clear the existing data
    table1.rows.add(parsedData); // Add new data
    table1.draw(false); // Redraw the table without resetting pagination
  };

    // Function to update all data
    window.updateAllDataTable2 = function (newData) {
      const parsedData = JSON.parse(newData);
      table2.clear(); // Clear the existing data
      table2.rows.add(parsedData); // Add new data
      table2.draw(false); // Redraw the table without resetting pagination
    };

    const build = {
      mode:"update"
          };
    FileMaker.PerformScript("SHP_G002 - order ship photo", JSON.stringify(build));

  // Function to fetch new data every 30 seconds
  setInterval(() => {
    // Example: Fetch data from an API or FileMaker script
    const build = {
      mode:"update"
          };
    FileMaker.PerformScript("SHP_G002 - order ship photo", JSON.stringify(build));
  }, 60000); // 30000ms = 30 seconds
