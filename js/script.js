function process(operation){
    switch (operation){
        case'start':
            document.getElementById('stop').disabled = false;
            document.getElementById('start').disabled = true;
            break;
        case 'stop':
            document.getElementById('stop').disabled = true;
            document.getElementById('start').disabled = false;
            break;
        default:
            window.close();
    }
}

function random_result(){
    
}