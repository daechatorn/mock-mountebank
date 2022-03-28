function (config) {
    try {
        var apiKey = config.request.headers['apiKey'];
        if(apiKey != "1111"){
            return false;
        }

        var queryParam = config.request.query;
        var consentId = queryParam['consent_id'];

        var isMatch = false;
        switch (consentId) {
            case "1":
            case "2":
            case "3":
                isMatch = true;
            break;
        }

        return isMatch;
    }
    catch (err) {
        logger.error(err.stack);
        return false;
    }
}
