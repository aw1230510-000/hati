document.getElementById("button").addEventListener("click",formChange);

        function formChange(){
            let err = 0;

            let check = document.getElementById("checkbox").checked;
            if(check == true){
                document.getElementById("no_check").textContent = ""; //チェックボックスにチェックが入っているとき

                // 件名
                let title = document.getElementById("title").value;
                if(title == "" || title == null){
                    document.getElementById("no_title").textContent = "件名を入力してください。";
                    err = 1;
                }else{
                    document.getElementById("no_title").textContent = "";
                }
                
                // 名前
                let name = document.getElementById("name").value;
                if(name == "" || name == null){
                    document.getElementById("no_name").textContent = "名前を入力してください。";
                    err = 2;
                }else{
                    document.getElementById("no_name").textContent = "";
                }

                // メール
                let mail = document.getElementById("email").value;
                let mail_match = mail.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/); //aaaaaa00@kkkkk.jp
                if(mail == "" || mail_match == null){
                    document.getElementById("no_mail").textContent = "メールアドレスを入力してください。";
                    err = 3;
                }else{
                    document.getElementById("no_mail").textContent = "";
                }

                // 電話
                let tel = document.getElementById("tel").value;
                let tel_match = tel.match(/^0\d{1,3}-\d{2,4}-\d{3,4}$/); //０から始まり９桁または１０桁の数字、ハイフンあり
                if(tel == "" || tel_match == null){
                    document.getElementById("no_tel").textContent = "電話番号を入力してください。";
                    err = 4;
                }else{
                    document.getElementById("no_tel").textContent = "";
                }

                // 内容
                let cont = document.getElementById("cont").value;
                if(cont == "" || cont == null){
                    document.getElementById("no_cont").textContent = "内容を入力してください。";
                    err = 5;
                }else{
                    document.getElementById("no_cont").textContent = "";
                }

                if(err==0){
                    document.getElementById("submit_af").textContent="送信されました。";
                }

            }else{
                document.getElementById("no_check").textContent = "チェックを確認してください。";//チェックされていないとき
            }
            
        }