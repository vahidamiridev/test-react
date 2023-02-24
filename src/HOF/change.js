export default (Component , classCss)=>{
         

    function calculate (...num){
        let sum =0
           for(let i =0 ;i<=num.length -1  ;i++)
                    sum+=num[i]
        return sum
    }






    return (props)=>{
        return <div className={classCss}>
                     <Component
                     calculate={calculate}
                    
                         {...props}
                      />
        </div>
    }
}