function pickColor() {
          
        // Array containing colors
        var colors = [
        '#D82323', 
		'#FF9ED0', 
		'#128DDF',
        '#61C158', 
		'#FFBA1A'
        ];
          
        // selecting random color
        var random_color = colors[(Math.floor(Math.random() * colors.length))];
          
        var hoverColor = document.getElementById('pick');
        hoverColor.style.color = random_color;
    }