flag=1;flagg=1;
  function ditolak(){
  	if(fungsi==1){
  	if(flagg==1){Bn.style="margin:12px 0 12px 12px;cursor:default;opacity:0;transition:all 0s ease;";flagg=2;
                 Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 0 12px 140px;"}
  	}
   }
  function ditolak2(){
  	if(fungsi==1){
  	if(flagg==2){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:190px 0 12px 12px;";flagg=3}
  	    else if(flagg==3){Bn2.style="width:auto;opacity:1;transition:all .3s ease;margin:160px 160px 12px 12px;";flagg=4}
  		else if(flagg==4){Bn2.style="transition:all .3s ease;margin:12px 0 12px 12px;";Bn.style="margin:12px 0 12px 12px";flagg=1}
  	    }
   }
