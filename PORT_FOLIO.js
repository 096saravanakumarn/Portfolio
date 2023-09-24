  
            const tabcontents = document.querySelectorAll(".tab-contents");
            var btns=document.querySelectorAll('.button')
            btns.forEach((btn)=>{
                btn.addEventListener('click',()=>{

                    btns[btn.dataset.filter-1].classList.remove('active')
                   tabcontents.forEach((con)=>{
                    if(btn.dataset.filter==con.dataset.item){
                        con.classList.add('active-tab')
                        btns[btn.dataset.filter-1].classList.add('active')
                    }
                    else{
                        con.classList.remove('active-tab')
                        btns[con.dataset.item-1].classList.remove('active')
                    }
                   })
                  
                })
            })
          