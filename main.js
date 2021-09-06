function capturaDeDatos(){
        
     var salario=document.getElementById("salario").value;
     var hora=salario/240;

     var hora_noc0=hora*0.35;
     var hora_noc1=hora+hora_noc0;

     var ho_diurna=document.getElementById("hdiurnas").value;
     var ho_ex_diurna=document.getElementById("hediurnas").value;
     var ho_noc=document.getElementById("hnocturnas").value;
     var ho_ex_noc=document.getElementById("henocturnas").value;
     var ho_di_dominical=document.getElementById("hddominicales").value;
     var ho_ex_di_dominical=document.getElementById("heddominicales").value;
     var ho_noc_dominical=document.getElementById("hndominicales").value;
     var Ho_ex_noc_dominical=document.getElementById("hendominicales").value;
     var AuxTrans=53227;
        
        /* Horas Diurnas*/
        var ho_diurna_total= hora*ho_diurna;
        /* */

        /* Horas Extras Diurnas*/
        var ho_ex_diurna_total1= hora*1.25;
        var ho_ex_diurna_total2= ho_ex_diurna*ho_ex_diurna_total1;
        /* */

        /* Horas Nocturnas */
        var ho_noc_total= hora_noc1*ho_noc;
        /* */

        /* Horas Extras Noctunas*/
        var ho_ex_noc_total1=hora*1.75;  
        var ho_ex_noc_total2=ho_ex_noc_total1*ho_ex_noc;
        /* */

        /* Horas Diurnas Dominicales*/
        var ho_di_dominical_total1=hora*1.75; 
        var ho_di_dominical_total2=ho_di_dominical_total1*ho_di_dominical;
        /* */

        /* Horas Extras Diurnas Dominicales*/
        var ho_ex_di_dominical_total1=hora*2.0;
        var ho_ex_di_dominical_total2=ho_ex_di_dominical_total1*ho_ex_di_dominical;
        /* */

        /* Horas Noctunas Dominicales */
        var ho_noc_dominical_total1=hora*2.1;
        var ho_noc_dominical_total2=ho_noc_dominical_total1*ho_noc_dominical;
        /* */

        /* Horas Extras Nocturnas Dominicales*/
        var Ho_ex_noc_dominical_total1=hora*2.5;
        var Ho_ex_noc_dominical_total2=Ho_ex_noc_dominical_total1*Ho_ex_noc_dominical;
        /* */

        /* */

        var valor_total=ho_diurna_total+ho_ex_diurna_total2+ho_noc_total+ho_ex_noc_total2+ho_di_dominical_total2+ho_ex_di_dominical_total2+ho_noc_dominical_total2+Ho_ex_noc_dominical_total2+AuxTrans;

        /* salud y pension */

        var salud= valor_total*0.036;
        var pension= valor_total*0.036;
        var deducidos=salud+pension;

        var valor_total2=valor_total-deducidos;

        /* */
        




       



        document.getElementById("ho_diurna_text").innerText=` $ `+parseInt(ho_diurna_total);
        document.getElementById("ho_ex_diurna_text").innerText=` $ `+ parseInt(ho_ex_diurna_total2);
        document.getElementById("ho_noc_text").innerText=` $ `+ parseInt(ho_noc_total);
        document.getElementById("ho_ex_noc_text").innerText=` $ `+ parseInt(ho_ex_noc_total2);
        document.getElementById("ho_di_dominical_text").innerText=` $ `+ parseInt(ho_di_dominical_total2);
        document.getElementById("ho_ex_di_dominical_text").innerText=` $ `+ parseInt(ho_ex_di_dominical_total2);
        document.getElementById("ho_noc_dominical_text").innerText=` $ `+ parseInt(ho_noc_dominical_total2);
        document.getElementById("Ho_ex_noc_dominical_text").innerText=` $ `+ parseInt(Ho_ex_noc_dominical_total2);
        document.getElementById("valor_total_text").innerText=` $ `+ parseInt(valor_total2);
        document.getElementById("aux_Trans").innerText=` $ `+ parseInt(AuxTrans);
        document.getElementById("salud_").innerText=` $ - `+ parseInt(salud);
        document.getElementById("pension_").innerText=` $ - `+ parseInt(pension);
        
}

   
                                       




