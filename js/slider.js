function prev(){
  alert(compCerts[0]);
}

// Image arrays for different slideshows
var compCerts = [
  'images/certificates/computing/css_certificate.jpg',
  'images/certificates/computing/html_certificate.jpg',
  'images/certificates/computing/php-certificate.jpg',
  'images/certificates/computing/SQL_certificate.jpg'
];

var cpdCerts = [
  'images/certificates/cpd/19-06-27_fire.jpg',
  'images/certificates/cpd/19-04-24_mhfa.jpg',
  'images/certificates/cpd/19-02-26_demos.jpg',
  'images/certificates/cpd/16-11-01_h+s-fhos.jpg',
  'images/certificates/cpd/16-05-19_google.jpg',
  'images/certificates/cpd/14-11-20_cp-lvl1.jpg',
  'images/certificates/cpd/14-10-08_h+s-ftechs.jpg',
  'images/certificates/cpd/13-12-11_class-chem.jpg',
  'images/certificates/cpd/09-04-22_chem-skills.jpg',
  'images/certificates/cpd/09-04-21_chem-safe.jpg',
  'images/certificates/cpd/08-10-02_swis-details.jpg',
  'images/certificates/cpd/08-07-28_soldering.jpg',
  'images/certificates/cpd/08-06-11_chem-hand2.jpg',
  'images/certificates/cpd/08-06-10_chem-hand1.jpg',
  'images/certificates/cpd/07-11-09_micro-main.jpg'
];

var schoolCerts = [
  'images/certificates/school/01_msc-bioinfo.jpg',
  'images/certificates/school/03_a2-bio.jpg',
  'images/certificates/school/03_a2-bio.jpg',
  'images/certificates/school/04_a2-chem.jpg',
  'images/certificates/school/05_a2-maths.jpg',
  'images/certificates/school/06_as-french.jpg',
  'images/certificates/school/07_gcse-science.jpg',
  'images/certificates/school/08_gcse-humanities.jpg',
  'images/certificates/school/09_gcse-mfl.jpg'
];

//Set functions of "Next" and "Previous" buttons

var num = 0;  //Set initial value of slideshow to first image in array

function next(){
  //Find slideshow using className
  var slideshow = document.getElementsByClassName('slider');
  alert(return slideshow.id);

  //Identify specific slideshow using id and link to correct image array
  switch (return slideshow.id){
    case 'comp':
      var length = compCerts.length;
      var array = compCerts.slice(0, length);break;
    case 'cpd':
      var length = cpdCerts.length;
      var array = cpdCerts.slice(0, length); break;
    case 'school':
      var length = schoolCerts.length;
      var array = schoolCerts.slice(0, length); break;
  }

  //increase num by 1
  //num++;
  //wrap slideshow back around to the initial image at end of array
  //if(num >= array.length){
  //  num=0;
  //}
  //display new image
  //slideshow.src = array[num];
}
