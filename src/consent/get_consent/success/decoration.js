function (request, response){
    try {

        var queryParam = config.request.query;
        var consentId = queryParam['consent_id'];

        var statusCode = "1000";
        var statusHeader = "Success Header";
        var statusDescription = "Success Description";
        var data_detail_html = "";
        var data_detail_type = "";
        var data_name = "Customer";

        switch(consentId){
            case "4":
                statusCode = "1001";
                statusHeader = "Success Header 1001";
                statusDescription = "Success Description 1001";
                data_detail_html = "<html><body>Hello 1001</body></html>";
                data_detail_type = "Marketing";
            break;
            case "5":
                statusCode = "1002";
                statusHeader = "Success Header 1002";
                statusDescription = "Success Description 1002";
                data_detail_html = "<html><body>Hello 1002</body></html>";
                data_detail_type = "T&C";
            break;
        }

        //body
        var body = response.body;
        body = body.replace(/\${status_code}/g, statusCode);
        body = body.replace(/\${status_header}/g, statusHeader);
        body = body.replace(/\${status_description}/g, statusDescription);
        body = body.replace(/\${data_detail_html}/g, data_detail_html);
        body = body.replace(/\${data_detail_type}/g, data_detail_type);
        body = body.replace(/\${data_name}/g, data_name);

        //Set value back
        response.body = body;
        response.statusCode = 200;
        response.headers = {"content-type": "application/json"};

    }
    catch(err) {
        response.body = err.stack;
    }
}