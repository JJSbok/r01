import ZCountDlsplay from "./ZCountDlsplay";
import ZCountPanel from "./ZCountPanel";
import { useState } from "react";

const ZCounter = () => {

        const target = {
            p1 : 'A',
            p2 : 'B',
            p3 : 'C',
            p4 : 'D'
        }

        const [obj, setObj] = useState({num:10})
       
        const changeObj = (amount) => {
            obj.num += amount
            setObj({...obj})
        }

        // setInterval(()=> {
        //  changeObj(1)   
        // },3000)

        return (
        <div>
            <ZCountDlsplay value={obj.num}/>
            <ZCountPanel fn={changeObj}/>
        </div>

    );   
   }
   
   export default ZCounter;