(function ($){
    $.getCoinValue = function(token){
        $.getJSON('https://min-api.cryptocompare.com/data/price?fsym=' +token+ '&tsyms=USD', function(data){
            console.log(data.USD);
            $('.converted').text(data.USD);
            $('#jpy').text(data.JPY);
            $('#eur').text(data.EUR);
        });
    }
})(jQuery);

jQuery(document).ready(function($){
    $(window).on('load', function(){
        $.getCoinValue('BTC');
    });
    $('#coins').change(function(e){
        e.preventDefault();
        const tkn = $(this).val();
        $.getCoinValue(tkn);
        console.log(tkn);
    });
});
