/*:
 * @plugindesc Custom Quest Log for CCC Training Objectives (Auto-Wrap Version).
 * @help Use $gameVariables.setNote(id) in a script call to set Variable 1.
 */

(function() {
    // Blueprint for the variable function
    Game_Variables.prototype.setNote = function(id) {
        var note = "";
        switch (id) {
            // --- FUNDAMENTALS & HARDWARE ---
            case 1: note = "VIRUS: A computer virus is a set of computer instructions or code."; break;
            case 2: note = "IOT: IoT stands for the Internet of Things."; break;
            case 3: note = "NETWORK: 200.200.1.1 belongs to a Class C IP address structure."; break;
            case 4: note = "HTML: The correct tag for the largest heading in the system is <h1>."; break;
            case 5: note = "ID: AADHAR is a unique identity number issued by UIDAI."; break;
            case 6: note = "BANKING: BHIM stands for Bharat Interface for Money."; break;
            case 7: note = "STORAGE: One Kilobyte is equal to exactly 1024 bytes."; break;
            case 8: note = "HARDWARE: UPS provides backup power and prevents shutdown during failure."; break;
            case 9: note = "GUI: The full form of GUI is Graphical User Interface."; break;
            case 10: note = "HISTORY: The Future Skill Portal was launched on 19th February 2018."; break;

            // --- LIBREOFFICE CALC & SPREADSHEETS ---
            case 11: note = "SCHEME: PMJDY stands for Pradhan Mantri Jan Dhan Yojana."; break;
            case 12: note = "SOCIAL: LinkedIn is the platform primarily focused on professional networking."; break;
            case 13: note = "NETWORK: ARPANET stands for Advanced Research Project Agency Network."; break;
            case 14: note = "CALC: Use a Line chart to show trends over a period of time."; break;
            case 15: note = "CALC: In a spreadsheet, letters are used to represent Columns."; break;
            case 16: note = "OSI: The Transport Layer is also known as the 'End-to-End' layer."; break;
            case 17: note = "CALC: 71A is an invalid cell address format."; break;
            case 18: note = "CALC: All formulas in LibreOffice Calc must start with the '=' symbol."; break;
            case 19: note = "CALC: 'Chart Series' is not a valid step in the Chart Wizard."; break;
            case 20: note = "HTML: HTML stands for Hyper Text Markup Language."; break;
            case 21: note = "CALC: Letters represent Columns, while numbers represent Rows."; break;
            case 22: note = "CALC: Use the AVERAGE() function to calculate the mean of a range."; break;
            case 23: note = "SECURITY: 2FA stands for Two Factor Authentication."; break;
            case 24: note = "MEMORY: Virtual memory is an illusion of an extremely large main memory."; break;
            case 25: note = "UPI: UPI stands for Unified Payment Interface."; break;

            // --- EMAIL & INTERNET ---
            case 26: note = "EMAIL: Ray Tomlinson is identified as the discoverer of email."; break;
            case 27: note = "LIBRE: Calc is for Spreadsheets; Writer for Word Processing; Impress for Presentations."; break;
            case 28: note = "SECURITY: OTP stands for One Time Password."; break;
            case 29: note = "EMAIL: CC in an email context stands for Carbon Copy."; break;
            case 30: note = "WRITER: Mail Merge is the tool used to send letters to many recipients."; break;
            case 31: note = "HARDWARE: The Hardware Address is commonly known as the MAC Address."; break;
            case 32: note = "EDIT: Use Backspace or Delete keys to remove selected text."; break;
            case 33: note = "LAYOUT: Portrait orientation refers to a Vertical page layout."; break;
            case 34: note = "WRITER: The line appearing under text is officially called an Underline."; break;
            case 35: note = "WRITER: Use a Triple Click to select an entire sentence in Writer."; break;

            // --- ADVANCED WRITER & BANKING ---
            case 36: note = "WRITER: Mail Merge produces multiple documents from a template and data source."; break;
            case 37: note = "WRITER: Use Ctrl+Shift+N to manage templates within the application."; break;
            case 38: note = "WRITER: The Ruler option is located under the View menu."; break;
            case 39: note = "HISTORY: 'Param' is the supercomputer developed by Indian scientists."; break;
            case 40: note = "ECONOMY: GST stands for Goods and Services Tax."; break;
            case 41: note = "BANKING: NEFT is batch-based, RTGS is real-time, and IMPS is 24x7 instant."; break;
            case 42: note = "SYSTEM: ORS stands for Online Registration System."; break;
            case 43: note = "WRITER: Form elements like check boxes and text boxes are called Form Controls."; break;
            case 44: note = "FORMAT: The .odt extension stands for Open Document Text."; break;
            case 45: note = "PROTOCOL: DHCP provides dynamic IP addressing to clients on a network."; break;
            case 46: note = "LAYOUT: 'Justify' alignment places text evenly between both margins."; break;
            case 47: note = "WRITER: Search for different meanings of words using the Thesaurus tool."; break;
            case 48: note = "CALC: Use 'Freeze Rows and Columns' to keep headers visible while scrolling."; break;
            case 49: note = "HARDWARE: CISC stands for Complex Instruction Set Computer."; break;
            case 50: note = "CALC: The value of the formula =round(175, -2) is 200."; break;
            
            default: note = "System error: Note ID " + id + " not found."; break;
        }

        // --- AUTOMATIC WRAPPER LOGIC ---
        function wrapText(str) {
            var maxLength = 45; // Max characters per line for the default window
            var words = str.split(' ');
            var currentLine = '';
            var finalOutput = '';

            for (var i = 0; i < words.length; i++) {
                if ((currentLine + words[i]).length <= maxLength) {
                    currentLine += (currentLine === '' ? '' : ' ') + words[i];
                } else {
                    finalOutput += currentLine + '\n';
                    currentLine = words[i];
                }
            }
            return finalOutput + currentLine;
        }

        // Apply wrap and save to Variable 1
        var wrappedNote = wrapText(note);
        this.setValue(1, wrappedNote); // Sets \V[1]
    };
})();