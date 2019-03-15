$(document).ready(() => {
	var menubtn = 0;
	$('#burgerbtn').on('click',() => {
		if(menubtn==0){
		$('#burgerbtn').attr('src','icons/burgerbtn-clckd.png');
			menubtn=1;
		}
		else if(menubtn==1){
			$('#burgerbtn').attr('src','icons/burgerbtn-unclck.png');
			menubtn=0;
		}
	});
	$('#sugeconavlogo').hide();
	$(window).scroll(function() {
    if ($(this).scrollTop()>149){
        $('#sugeconavlogo').show(500);
     }
    else{
      $('#sugeconavlogo').hide(100);
     }
 });

//################################# Pagination ###################################//
	var cyPageNum=1;
	$('#prev').on('click',() => {
		switch(cyPageNum) {
	   
	    case 2:
		$('#page-2').removeClass('active');
		$('#page-1').addClass('active');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-acetylene').removeClass('cytank-hide');
		$('#cytank-argon').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','none');
		$('#next').css('pointerEvents','auto');
		cyPageNum=1;
	    break;

	    case 3:
		$('#page-3').removeClass('active');
		$('#page-2').addClass('active');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-carbondioxide').removeClass('cytank-hide');
		$('#cytank-helium').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=2;
	    break;

	    case 4:
		$('#page-4').removeClass('active');
		$('#page-3').addClass('active');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-hydrogen').removeClass('cytank-hide');
		$('#cytank-industrialoxygen').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=3;
	    break;

	    case 5:
		$('#page-5').removeClass('active');
		$('#page-4').addClass('active');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#cytank-medicaloxygen').removeClass('cytank-hide');
		$('#cytank-nitrogen').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','none');
		cyPageNum=4;
	    break;

	    default:
	   		nextCyPage=1;
  }
	});
	
	$('#page-1').on('click',() => {
		$('#page-1').addClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').removeClass('cytank-hide');
		$('#cytank-argon').removeClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','none');
		$('#next').css('pointerEvents','auto');
		cyPageNum=1;
	});
	$('#page-2').on('click',() => {
		$('#page-1').removeClass('active');
		$('#page-2').addClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#page-6').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').removeClass('cytank-hide');
		$('#cytank-helium').removeClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=2;
	});
	$('#page-3').on('click',() => {
		$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').addClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').removeClass('cytank-hide');
		$('#cytank-industrialoxygen').removeClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=3;
	});
	$('#page-4').on('click',() => {
		$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').addClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').removeClass('cytank-hide');
		$('#cytank-nitrogen').removeClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=4;
	});
	$('#page-5').on('click',() => {
		$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').addClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').removeClass('cytank-hide');
		$('#cytank-lpg').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','none');
		cyPageNum=5;
	});
	$('#next').on('click',() => {
		switch(cyPageNum) {
	
	    case 1:
	    $('#page-1').removeClass('active');
		$('#page-2').addClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').removeClass('cytank-hide');
		$('#cytank-helium').removeClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=2;
	    break;

	    case 2:
	    $('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').addClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').removeClass('cytank-hide');
		$('#cytank-industrialoxygen').removeClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=3;
	    break;

	    case 3:
	    $('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').addClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').removeClass('cytank-hide');
		$('#cytank-nitrogen').removeClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=4;
	    break;

	    case 4:
	    $('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').addClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').removeClass('cytank-hide');
		$('#cytank-lpg').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','none');
		cyPageNum=5;
	    break;

	    default:
	   		nextCyPage=1;
  }
	});
//################################# END Pagination ###################################//

//################################# Select Option Filter (Products) ###################################//
$('#prodList').change(function() {
    if ($(this).val() === 'prodAcetylene') {
        $('#page-1').addClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').removeClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','none');
		$('#next').css('pointerEvents','auto');
		cyPageNum=1;
    }
     if ($(this).val() === 'prodArgon') {
     	$('#page-1').addClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').removeClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','none');
		$('#next').css('pointerEvents','auto');
		cyPageNum=1;
     }
     if ($(this).val() === 'prodCarbon-dioxide') {
     	$('#page-1').removeClass('active');
		$('#page-2').addClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').removeClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=2;
     }
     if ($(this).val() === 'prodHelium') {
     	$('#page-1').removeClass('active');
		$('#page-2').addClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').removeClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=2;
     }
     if ($(this).val() === 'prodHydrogen') {
     	$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').addClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').removeClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=3;
     }
      if ($(this).val() === 'prodIndustrial-oxygen') {
     	$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').addClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').removeClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=3;
     }
     if ($(this).val() === 'prodMedical-oxygen') {
     	$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').addClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').removeClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=4;
     }
     if ($(this).val() === 'prodNitrogen') {
     	$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').addClass('active');
		$('#page-5').removeClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').removeClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','auto');
		cyPageNum=4;
     }
     if ($(this).val() === 'prodNitrous-oxide') {
     	$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').addClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').removeClass('cytank-hide');
		$('#cytank-lpg').addClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','none');
		cyPageNum=5;
     }
     if ($(this).val() === 'prodLpg') {
     	$('#page-1').removeClass('active');
		$('#page-2').removeClass('active');
		$('#page-3').removeClass('active');
		$('#page-4').removeClass('active');
		$('#page-5').addClass('active');
		$('#cytank-acetylene').addClass('cytank-hide');
		$('#cytank-adapter').addClass('cytank-hide');
		$('#cytank-argon').addClass('cytank-hide');
		$('#cytank-carbondioxide').addClass('cytank-hide');
		$('#cytank-helium').addClass('cytank-hide');
		$('#cytank-hydrogen').addClass('cytank-hide');
		$('#cytank-industrialoxygen').addClass('cytank-hide');
		$('#cytank-medicaloxygen').addClass('cytank-hide');
		$('#cytank-nitrogen').addClass('cytank-hide');
		$('#cytank-nitrousoxide').addClass('cytank-hide');
		$('#cytank-lpg').removeClass('cytank-hide');
		$('#prev').css('pointerEvents','auto');
		$('#next').css('pointerEvents','none');
		cyPageNum=5;
	}
});
//################################# END Select Option Filter (Products) ###################################//

//################################# Services Filter ###################################//
 $("#servFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#servTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
//################################# END Services Filter ###################################//

//################################# Under Construction go back Button #####################//
$('#underconsBtn').on('click',() =>{
	window.history.back();
})
//################################# END Under Construction go back Button #################//
//################################# Contact Us ############################################//

//################################# END Contact Us #########################################//





});