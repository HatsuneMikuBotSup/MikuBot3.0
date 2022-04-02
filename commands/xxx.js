module.exports = {
    name: "xxx",
    description: "xxx",
    execute(message) {

        require('googleapis');

        function doGet() {
            var folder = DriveApp.getFolderById("1AeCgotngoaE5YgNbrZVxONNCzRmoslYP");
            var files = folder.getFiles();

            var filearray = new Array;
            var c = 0;

            while (files.hasNext()) {
                var s = files.next();
                filearray[c] = s.getUrl();
                c = c + 1;
            }

            var item = Math.round(Math.random() * filearray.length);
            var itemurl = filearray[item];

            var html = "<script>window.top.location.href='" + itemurl + "';</script>";

            return HtmlService.createHtmlOutput(html);
        }

        message.channel.send(doGet());

    }
}