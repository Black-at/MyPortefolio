// On attend que la page soit complètement chargée
window.onload = function() {
    // Attendre 3 secondes avant de cacher l'écran de chargement
    setTimeout(function() {
      // Masquer l'élément de chargement
      document.querySelector('.loading').style.display = 'none';
      // Afficher le contenu principal
      document.querySelector('.main-content').style.display = 'block';
    }, 3000); // 3000 millisecondes = 3 secondes
  };
  
