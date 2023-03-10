const test = () => {

    const handleClick = async () => {
        const options = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                userAccount: "hu",
                userPasswd: 111111,
            })
          };
        const res = await fetch("http://127.0.0.1:4523/m1/2355117-0-default/questManege/info");
        const data = await res.json();
        
         console.log(data);
        
    }
    
    


    return ( <div onClick={(e) => handleClick()}>
        test
    </div> );
}
 
export default test;