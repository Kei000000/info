  // アンカーリンク
  $(function(){
    //#で始まるa要素をクリックしたときに処理（”＃”←ダブルクォーテーションで囲むのを忘れずに）
    $('a[href^="#"]').click(function(){
      //移動先を0pxに調整する。0を30にすると30px下にずらす
      var adjust = 0;
      //スクロールの速度（ミリ秒）
      var speed = 400;
      //アンカーの値取得　リンク先（href）を取得して、hrefという変数に代入
      var href = $(this).attr("href");
      //移動先を取得　リンク先（href）のidがある要素を探して、targetに代入
      var target = $(href == "#" || href == "" ? 'html' : href);
      //移動先を調整　idの要素の位置をoffset()で取得して、targetに代入
      var position = target.offset().top + adjust;
      //スムーズスクロ―ルlinear(等速) or swing(変速)
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });




//並び替えボタン設定したい
//並び替えボタンをクリックしたら
//$('.msr_btn11').on('click',function(){
    //並び替えボタンに付いてるactiveクラスを全て取り除き
    //$(".msr_btn11 li.active").removeClass("active");
    //クラス名を取得
    //var className = $(this).attr("class");
    //「sortXX active」のクラス名に分割して配列にする
    //className = className.split(' ');
    //クラス名が全ての場合は全ての要素を出し、それ以外はフィルターを実行
    //if(className[0] == "sort00"){
        //grid.show('');
    //}else{
        //grid.filter("."+className[0]);
    //}
//});