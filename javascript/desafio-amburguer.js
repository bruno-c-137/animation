
(function(){
    var $btn = document.querySelector('#btn');
  var $html = document.querySelector('html');
  //se o javascript tiver abilitado, recupere o valor do "ariaControl" que ta no botao

  var ariaControl = $btn.getAttribute('aria-controls')
  var $menu = document.getElementById(ariaControl);


$html.classList.remove('no-js');
$html.classList.add('js') 
$btn.addEventListener('click', function(){
    $html.classList.toggle('menu-opened')
    // recupere o valor do "ariaExpanded"
    // o this é o proprio $btn
    // e converte esse cara para booleno, se ele for string true, tudo isso sera true booleano, se for false tudo vai retornar um booleano false
    // agora "ariaExpanded" recebe true ou false booleanos
    var ariaExpanded = this.getAttribute('aria-expanded') === 'true';
    $btn.setAttribute('aria-expanded', !ariaExpanded);
    $menu.setAttribute('aria-expanded', !ariaExpanded);
})
  
   
})()


