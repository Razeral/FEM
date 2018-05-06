var RAFA2POCClient;
document.addEventListener("deviceready", function () {
    RAFA2POCClient = new WindowsAzure.MobileServiceClient(
                    "https://rafa2poc.azurewebsites.net");
});