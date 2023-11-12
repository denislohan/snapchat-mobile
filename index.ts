document.addEventListener('DOMContentLoaded',() =>{

    const input =  document.querySelectorAll('.text-input input') 

    input.forEach((e) => {
        let f =  <HTMLInputElement>e;

        f.addEventListener('focus',event=>{
            const el = (event.target) as HTMLInputElement;
            el.placeholder=''
            const parent = el.parentElement;
            const siblingLabel = parent!.querySelector('label')
            siblingLabel!.style.display='block'

         })

         f.addEventListener('focusout',event=>{
             const placeholder:{'username-email':string, password:string} ={
                'username-email': 'Username Or Email',
                password: 'Password'
             }
            const el = (event.target) as HTMLInputElement;
            const parent = el.parentElement;
            const siblingLabel = parent!.querySelector('label')

            if(!el.value){
                
                const key = el.id;
                if(key == 'username-email' || key == 'password')
                    el.placeholder = placeholder[key]

                siblingLabel!.style.display='none'

            }

         })

    
    })


})