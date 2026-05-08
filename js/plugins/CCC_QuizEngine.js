/*:
 * @plugindesc CCC Quiz Engine - Complete 50 MCQ Logic with Auto-Wrap.
 * @help 1. Use $gameVariables.askQuestion(id) to load data.
 * 2. Use \V[1] for Question, \V[4]-\V[7] for Choices.
 * 3. Variable #3 stores the Correct Answer Index (1-4).
 * 4. Variable #16 stores the Correct Answer Text (String).
 */

(function() {
    Game_Variables.prototype.askQuestion = function(id) {
        var q = "", a = "", b = "", c = "", d = "", ans = 0;

        switch (id) {
            case 1:
                q = "What is computer virus?";
                a = "Disease"; b = "Types of bacteria"; c = "Hardware component"; d = "Set of computer instruction or code";
                ans = 4; break; 
            case 2:
                q = "IoT stands for:";
                a = "Internet of Technology"; b = "Internet of Things"; c = "Internet of Tech"; d = "Industrial of things";
                ans = 2; break; 
            case 3:
                q = "Which of the following belongs to class C address?";
                a = "200.200.1.1"; b = "10.10.1.1"; c = "224.1.1.1"; d = "127.0.0.1";
                ans = 1; break; 
            case 4:
                q = "Correct HTML tag for the largest heading is:";
                a = "<head>"; b = "<h6>"; c = "<heading>"; d = "<h1>";
                ans = 4; break; 
            case 5:
                q = "AADHAR is a unique identity number issued by:";
                a = "UBI"; b = "UIAI"; c = "UIDAI"; d = "UBDAI";
                ans = 3; break; 
            case 6:
                q = "What does BHIM stand for?";
                a = "Bharat Interface for Money"; b = "Bharat Interface to Money"; c = "Bharat Internet for Money"; d = "Bharat Interaction for Money";
                ans = 1; break; 
            case 7:
                q = "One kilobyte is equal to:";
                a = "1000 bytes"; b = "1024 bytes"; c = "100 bytes"; d = "1023 bytes";
                ans = 2; break; 
            case 8:
                q = "Which provides backup power during a power failure?";
                a = "PPT"; b = "UPS"; c = "SMPS"; d = "USB";
                ans = 2; break; 
            case 9:
                q = "Full form of GUI is:";
                a = "Graphics use interface"; b = "Graphical user interface"; c = "Graph use interface"; d = "None of the above";
                ans = 2; break; 
            case 10:
                q = "When did Future Skill Portal start?";
                a = "19th February 2018"; b = "9th February 2018"; c = "29th February 2018"; d = "19th November 2018";
                ans = 1; break; 
            case 11:
                q = "PMJDY stands for:";
                a = "Public Money Distribution"; b = "Pradhan Mantri Jan Dhan Yojana"; c = "People's Money Development"; d = "Pradhan Mantri Job Development";
                ans = 2; break; 
            case 12:
                q = "Which platform is for professional networking?";
                a = "Snapchat"; b = "Pinterest"; c = "LinkedIn"; d = "WhatsApp";
                ans = 3; break; 
            case 13:
                q = "ARPANET stands for:";
                a = "Advanced Research Project Agency Network"; b = "Advanced Research Programmed Network"; c = "Advanced Research Project Auto Network"; d = "Advanced Research Project Authorized";
                ans = 1; break; 
            case 14:
                q = "Which chart shows trends over time in Calc?";
                a = "Bar"; b = "Line"; c = "Pie"; d = "Scatter";
                ans = 2; break; 
            case 15:
                q = "In spreadsheet, letters are used to represent:";
                a = "Columns"; b = "Block"; c = "Rows"; d = "Cells";
                ans = 1; break; 
            case 16:
                q = "Which OSI layer is called 'End-to-End' layer?";
                a = "Network Layer"; b = "Application Layer"; c = "Transport Layer"; d = "Physical Layer";
                ans = 3; break; 
            case 17:
                q = "Which of the following is an invalid cell address?";
                a = "A1"; b = "Z249"; c = "71A"; d = "M54";
                ans = 3; break; 
            case 18:
                q = "A formula starts with which symbol in Calc?";
                a = "$"; b = "@"; c = "="; d = "None";
                ans = 3; break; 
            case 19:
                q = "Which is not a valid step in Chart Wizard?";
                a = "Data Series"; b = "Chart Series"; c = "Chart Elements"; d = "Chart Type";
                ans = 2; break; 
            case 20:
                q = "What is the full form of HTML?";
                a = "Hyphenation text markup"; b = "Hyper text markup language"; c = "Hyper text marketing"; d = "Hyphenation test marking";
                ans = 2; break; 
            case 21:
                q = "In spreadsheet, letters are used to represent:";
                a = "Columns"; b = "Block"; c = "Rows"; d = "Cells";
                ans = 1; break; 
            case 22:
                q = "Which function calculates average in Calc?";
                a = "AVG()"; b = "AVERAGE()"; c = "AVR()"; d = "MEAN()";
                ans = 2; break; 
            case 23:
                q = "What is 2FA?";
                a = "Two Factor Auditions"; b = "Two Factor Authentication"; c = "Two Factor Authorised"; d = "Two Factor Verification";
                ans = 2; break; 
            case 24:
                q = "Virtual memory is:";
                a = "Large main memory"; b = "Large secondary memory"; c = "Illusion of large memory"; d = "Super computer memory";
                ans = 3; break; 
            case 25:
                q = "What is the meaning of UPI?";
                a = "Unified Payment Interface"; b = "Unfind Pay Interface"; c = "Immediate Payment Interface"; d = "None";
                ans = 1; break; 
            case 26:
                q = "Who is the discoverer of email?";
                a = "Dennis Ritchie"; b = "Charles Babbage"; c = "Ray Tomlinson"; d = "James Gosling";
                ans = 3; break; 
            case 27:
                q = "Match: 1-Calc, 2-Writer, 3-Impress, 4-Base";
                a = "1-iii, 2-iv, 3-i, 4-ii"; b = "1-iv, 2-iii, 3-ii, 4-i"; c = "1-iii, 2-i, 3-iv, 4-ii"; d = "None";
                ans = 1; break; 
            case 28:
                q = "OTP stands for:";
                a = "One time password"; b = "Once and twice password"; c = "On time password"; d = "None";
                ans = 1; break; 
            case 29:
                q = "CC in E-mail stands for:";
                a = "Carbon catch"; b = "Carbon copy"; c = "Consider copy"; d = "Carbon coupon";
                ans = 2; break; 
            case 30:
                q = "Tool to send letter to many recipients:";
                a = "What-if"; b = "Mail merge"; c = "Goal seeking"; d = "Sorting";
                ans = 2; break; 
            case 31:
                q = "Hardware Address is known as:";
                a = "MAC Address"; b = "IP Address"; c = "Network Interface"; d = "ARP";
                ans = 1; break; 
            case 32:
                q = "To delete the selected sentence, press:";
                a = "Backspace"; b = "Del"; c = "Both A and B"; d = "None";
                ans = 3; break; 
            case 33:
                q = "Portrait refers to page orientation which is:";
                a = "Vertical"; b = "Horizontal"; c = "Flip"; d = "Upside down";
                ans = 1; break; 
            case 34:
                q = "What is the line under the text called in Writer?";
                a = "Underline"; b = "Below line"; c = "Bottom line"; d = "Top line";
                ans = 1; break; 
            case 35:
                q = "Which technique selects a sentence in Writer?";
                a = "Single click"; b = "Double Click"; c = "Triple Click"; d = "None";
                ans = 3; break; 
            case 36:
                q = "Mail Merge is:";
                a = "Single template/data source"; b = "Single template/Clip art"; c = "Single file/address"; d = "Multiple docs from template/data";
                ans = 4; break; 
            case 37:
                q = "Which key manages templates in Writer?";
                a = "Ctrl+N"; b = "Ctrl+Shift+N"; c = "Shift+O"; d = "Ctrl+Shift+O";
                ans = 2; break; 
            case 38:
                q = "In Writer, Ruler option is found in which menu?";
                a = "Tools"; b = "View"; c = "File"; d = "Insert";
                ans = 2; break; 
            case 39:
                q = "Supercomputer developed by Indian Scientists:";
                a = "Param"; b = "Super 301"; c = "Compaq Presario"; d = "CRAY YMP";
                ans = 1; break; 
            case 40:
                q = "GST stands for:";
                a = "General Sales Tax"; b = "Goods and Services Tax"; c = "Government Sales Tax"; d = "Goods Specific Tax";
                ans = 2; break; 
            case 41:
                q = "Match: 1-NEFT, 2-RTGS, 3-IMPS, 4-UPI PIN";
                a = "1-iii, 2-i, 3-iv, 4-ii"; b = "1-i, 2-iii, 3-iv, 4-ii"; c = "1-iii, 2-iv, 3-i, 4-ii"; d = "None";
                ans = 1; break; 
            case 42:
                q = "What is the full form of ORS?";
                a = "Online Registration System"; b = "Oral Rehydration Salts"; c = "Oral Rehydration Solution"; d = "None";
                ans = 1; break; 
            case 43:
                q = "Writer check boxes and text boxes are known as:";
                a = "Editing controls"; b = "Web controls"; c = "Form control"; d = "Document control";
                ans = 3; break; 
            case 44:
                q = "Odt stands for:";
                a = "Open office writer file"; b = "Office writer file"; c = "Open document text"; d = "Office document file";
                ans = 3; break; 
            case 45:
                q = "Which service provides dynamic IP addressing?";
                a = "WINS"; b = "DNS"; c = "DHCP"; d = "PPP";
                ans = 3; break; 
            case 46:
                q = "Alignment that places text evenly between margins:";
                a = "Center"; b = "Justify"; c = "Line"; d = "With margin";
                ans = 2; break; 
            case 47:
                q = "Different meanings of words are searched from:";
                a = "Dictionary"; b = "Google"; c = "Thesaurus"; d = "Spelling";
                ans = 3; break; 
            case 48:
                q = "Which feature fixes rows/columns while scrolling?";
                a = "Split Window"; b = "Freeze Rows and Columns"; c = "Grouping"; d = "Filtering";
                ans = 2; break; 
            case 49:
                q = "CISC stands for:";
                a = "Compound Instruction Set"; b = "Complex Information Set"; c = "Compound Information Set"; d = "Complex Instruction Set Computer";
                ans = 4; break; 
            case 50:
                q = "What is the value of =round(175, -2)?";
                a = "200"; b = "100"; c = "0"; d = "None";
                ans = 1; break; 

            default:
                q = "System Error: Missing Data for Question " + id;
                a = "-"; b = "-"; c = "-"; d = "-"; break;
        }

        function wrap(str) {
            var max = 45; 
            var words = str.split(' ');
            var cur = '';
            var out = '';
            for (var i = 0; i < words.length; i++) {
                if ((cur + words[i]).length <= max) {
                    cur += (cur === '' ? '' : ' ') + words[i];
                } else {
                    out += cur + '\n';
                    cur = words[i];
                }
            }
            return out + cur;
        }

        // --- FIXED LOGIC: Fills Variable 16 with the Answer TEXT ---
        var correctStr = "";
        if (ans === 1) correctStr = a;
        if (ans === 2) correctStr = b;
        if (ans === 3) correctStr = c;
        if (ans === 4) correctStr = d;

        this.setValue(1, wrap(q));        // Question Text
        this.setValue(3, ans);            // Current_Answer (ID 1-4)
        this.setValue(4, a);              // Choice 1
        this.setValue(5, b);              // Choice 2
        this.setValue(6, c);              // Choice 3
        this.setValue(7, d);              // Choice 4
        // Debugging: This will print the answer to the F12 console
        console.log("Question Loaded. Correct Answer for Var 16 is: " + correctStr);
        
        // Force the value as a String
        $gameVariables.setValue(16, String(correctStr));
    };
})();