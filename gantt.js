
anychart.onDocumentReady(function () {
	// create data
	var data = [{
		id: "1",
		name: "Development Life Cycle",
		actualStart: Date.UTC(2022, 01, 02),
		actualEnd: Date.UTC(2022, 06, 15),
		children: [{
				id: "1_1",
				name: "Planeacion",
				actualStart: Date.UTC(2022, 01, 02),
				actualEnd: Date.UTC(2022, 01, 22),
				connectTo: "1_2",
				connectorType: "finish-start",
				progressValue: "64%"
			},
			{
				id: "1_2",
				name: "Actividad 1",
				actualStart: Date.UTC(2022, 01, 23),
				actualEnd: Date.UTC(2022, 02, 20),
				connectTo: "1_3",
				connectorType: "start-start",
				progressValue: "90%"
			},
			{
				id: "1_3",
				name: "Actividad 2",
				actualStart: Date.UTC(2022, 02, 23),
				actualEnd: Date.UTC(2022, 02, 23),
				connectTo: "1_4",
				connectorType: "start-start",
				progressValue: "80%"
			},
			{
				id: "1_4",
				name: "Actividad 3",
				actualStart: Date.UTC(2022, 02, 26),
				actualEnd: Date.UTC(2022, 04, 26),
				connectTo: "1_5",
				connectorType: "finish-finish",
				progressValue: "90%"
			},
			{
				id: "1_5",
				name: "Atividad 4",
				actualStart: Date.UTC(2022, 04, 29),
				actualEnd: Date.UTC(2022, 05, 15),
				connectTo: "1_6",
				connectorType: "start-finish",
				progressValue: "60%"
			},
			{
				id: "1_6",
				name: "Actividad 5",
				actualStart: Date.UTC(2022, 05, 20),
				actualEnd: Date.UTC(2022, 05, 27),
				connectTo: "1_7",
				connectorType: "start-finish",
				progressValue: "40%"
			},
			{
				id: "1_7",
				name: "Actividad 6",
				actualStart: Date.UTC(2022, 05, 30),
				actualEnd: Date.UTC(2022, 06, 11),
				progressValue: "19%"
			},

		]
	}];
	// create a data tree
	var treeData = anychart.data.tree(data, "as-tree");

	// create a chart
	var chart = anychart.ganttProject();

	// set the data
	chart.data(treeData);
	// configure the scale
	chart.getTimeline().scale().maximum(Date.UTC(2022, 06, 30));
	// set the container id
	chart.container("container");
	// initiate drawing the chart
	chart.draw();
	// fit elements to the width of the timeline
	chart.fitAll();
});