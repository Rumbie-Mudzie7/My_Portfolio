jQuery(document).ready(function($) {

  // set animation timing
  var animationDelay = 2500,
      // loading bar effect
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000, // 3s is the duration of the transition on the loading bar - set in CSS
      // letters effect
      lettersDelay = 50;

  initHeadline();

  function initHeadline() {
    // insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    // initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function singleLetters($words) {
    $words.each(function() {
      var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
      for (i in letters) {
        if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function() {
      var headline = $(this);
      var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 5;
      spanWrapper.css('width', newWidth);
      if(headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        spanWrapper.css('width', '');
        setTimeout(function(){ spanWrapper.addClass('is-loading') }, barWaiting);
      };
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    if($word.parents('.cd-headline').hasClass('letters')) {
      var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
      setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');
    if(!$letter.is(':last-child')) {
      setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else if($bool) {
      setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
    }
    if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');
    if(!$letter.is(':last-child')) {
      setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else {
      if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }

  // this is for the demo only
  var intro = $('.cd-intro');
  $('.cd-filter input').on('change', function(event){
    var selected = $(event.target).attr('id');
    switch(selected) {
      case 'rotate-1':
        intro.load('https://codepen.io/lembitk/pen/mJbxXJ.html .rotate-1', function(){
          initHeadline();
        });
        break;
      case 'rotate-2':
        intro.load('https://codepen.io/lembitk/pen/mJbxXJ.html .rotate-2', function(){
          initHeadline();
        });
        break;
      case 'loading-bar':
        intro.load('https://codepen.io/lembitk/pen/mJbxXJ.html .loading-bar', function(){
          initHeadline();
        });
        break;
      case 'slide':
        intro.load('https://codepen.io/lembitk/pen/mJbxXJ.html .slide', function(){
          initHeadline();
        });
        break;
      case 'scale':
        intro.load('https://codepen.io/lembitk/pen/mJbxXJ.html .scale', function(){
          initHeadline();
        });
        break;
    }
  });

});
