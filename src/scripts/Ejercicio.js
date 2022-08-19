/* 
Autor: Marco Yael Resendíz Martínez 
e-mail:marco.resendiz@Axity.com
Title:Final Evaluation JS
Creation day :19/08/22
Last modification:19/08/22
Version:1
Notes:
    Instructions weren´t clear at all
    Spaces 4
    UTF-8
*/
import { ORDERS } from "./orders.js"; //importing the array ORDERS taht is in orders.js
/* /-------------------------------Begin of declaration of functions------------------------------- */
function test (merchant_id){
    /* /-------------------------------Begin of declaration of variable------------------------------- */
    var total = 0;
    var completeSells = 0; 
    var incompletedSells = 0;
    var totalImport=0;
    /* /-------------------------------End of declaration of variable------------------------------- */
    
    /* /-------------------------------Begin of solution------------------------------- */
    ORDERS.forEach(element => { /*element is every json*/ 
        if (element.completed_at != "" && element.merchant_id==merchant_id){
            total=total +parseFloat(element.amount);
            completeSells++;
            /*Show all the elements completed in order filter by merchant_id*/
            /*console.log(element)*/
            if(element.amount < 25000){ 
                totalImport=(parseFloat(element.amount) * 0.01 )+totalImport;
            }else if (parseFloat(element.amount) >= 25000 && parseFloat(element.amount)< 60000){
                totalImport=(element.amount * 0.095) +totalImport;
            }else {
                totalImport=(parseFloat(element.amount) * 0.085)+totalImport;
            }
    }
        incompletedSells++; /*Total Sells*/ 

    });
    console.log(incompletedSells)
    incompletedSells= incompletedSells - completeSells; /* Real value of incomplete sells*/
    console.log(total,completeSells,incompletedSells,totalImport)
/* /-------------------------------End of solution------------------------------- */

/* /-------------------------------Begin of response ------------------------------- */
    const idAnswer = {
        id: 1,
        merchant_id: merchant_id,
        numero_ventas: completeSells,
        faltan_completar: incompletedSells,
        total_ventas: completeSells + incompletedSells,
        comision: totalImport,
        desembolso: total - totalImport
    }
    const idWithoutAnswer = [{
        id: 1,
        merchant_id: merchant_id,
        numero_ventas: completeSells,
        faltan_completar: incompletedSells,
        total_ventas: completeSells + incompletedSells,
        comision: totalImport,
        desembolso: total - totalImport
    },{
        id: 2,
        merchant_id: merchant_id,
        numero_ventas: completeSells,
        faltan_completar: incompletedSells,
        total_ventas: completeSells + incompletedSells,
        comision: totalImport,
        desembolso: total - totalImport
    }]
/* /-------------------------------End of response------------------------------- */
    /* Print responses */
    console.log(idAnswer); 
    console.log(idWithoutAnswer);
}
/* /-------------------------------End of declaration of functions------------------------------- */

/* /-------------------------------Begin of calling function------------------------------- */
test("2");
/* /-------------------------------End of calling functions------------------------------- */