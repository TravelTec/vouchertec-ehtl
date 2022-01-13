function copy_text() { 

  jQuery("#myInput").select();  
  document.execCommand("copy");

  /* Alert the copied text */
  jQuery(".btn_copy_text").html("<i class='fa fa-check'></i> Copiado"); 
  jQuery("#myInput").attr("style", "width: 71%;background-color: #ddd;font-weight: 700;border: none;cursor: not-allowed;color:#72777c"); 
  setTimeout(function(){
  jQuery(".term-name-wrap").removeClass("form-invalid");
    }, 10);
  setTimeout(function(){
  jQuery(".btn_copy_text").html("Copiar"); 
  jQuery("#myInput").attr("style", "width: 78%;background-color: #ddd;font-weight: 700;border: none;cursor: not-allowed;color:#72777c"); 
    }, 2000);

} 