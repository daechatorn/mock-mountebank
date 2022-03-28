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
            case "4":
            case "5":
            case "6":
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
