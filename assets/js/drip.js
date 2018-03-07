window._drip_pro = new DripPro

//////////// VANAF HIER TOT EINDE DRIP PLINKO DE CODE INPLAKKEN////////////////
window.drip_plinko = function(drip, page) {
  var response = {},
  timer = document.querySelector('.jsDiscount'),
  timer_end_date = drip.custom_fields().timer_end_date


  if (typeof timer_end_date !== 'undefined' && timer !== null) {
    var time = getTime(timer_end_date),
        days = time.days,
        hours = time.hours,
        minutes = time.minutes,
        seconds = time.seconds

    time.total <= 0 ? timer.classList.add('discount--hidden') : timer.classList.remove('discount--hidden')

    var interval = setInterval(() => {
        if(time.total <= 0){
          clearInterval(interval)
          timer.classList.add('discount--hidden')
        } else {
          time = getTime(timer_end_date)
          updateTimer()
        }
    }, 1000)
  }

  function updateTimer() {
    var seconds0 = document.querySelector('[data-timer="seconds0"]'),
        seconds1 = document.querySelector('[data-timer="seconds1"]'),
        minutes0 = document.querySelector('[data-timer="minutes0"]'),
        minutes1 = document.querySelector('[data-timer="minutes1"]'),
        hours0 = document.querySelector('[data-timer="hours0"]'),
        hours1 = document.querySelector('[data-timer="hours1"]'),
        days0 = document.querySelector('[data-timer="days0"]'),
        days1 = document.querySelector('[data-timer="days1"]')

    seconds0.innerText = time.seconds[0]
    seconds1.innerText = time.seconds[1]
    minutes0.innerText = time.minutes[0]
    minutes1.innerText = time.minutes[1]
    hours0.innerText = time.hours[0]
    hours1.innerText = time.hours[1]
    days0.innerText = time.days[0]
    days1.innerText = time.days[1]
  }

  var discount_template = `<div class="container container--xxlarge">
                            <div class="discount__body grid grid--middle grid--gapeless">
                              <div class="grid__column">
                                <p class="discount__heading heading">25% Discount on Growthcasts Elite</p>
                              </div>

                              <div class="grid__column">
                                <div class="grid grid--center grid--middle">
                                  <div class="timer grid__column">
                                    <div class="jsTimer">
                                      <div class="timer__item">
                                        <span data-timer="days0">0</span>
                                        <span data-timer="days1">0</span>
                                        <p class="paragraph">days</p>
                                      </div> :
                                      <div class="timer__item">
                                        <span data-timer="hours0">0</span>
                                        <span data-timer="hours1">0</span>
                                        <p class="paragraph">hours</p>
                                      </div> :
                                      <div class="timer__item">
                                        <span data-timer="minutes0">0</span>
                                        <span data-timer="minutes1">0</span>
                                        <p class="paragraph">minutes</p>
                                      </div> :
                                      <div class="timer__item">
                                        <span data-timer="seconds0">0</span>
                                        <span data-timer="seconds1">0</span>
                                        <p class="paragraph">seconds</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="grid__column discount__button">
                                    <a class="button button--primary button--rounded button--shadow" href="https://gum.co/tPjm">
                                      <span>Get it now</span>
                                      <div class="wrapper grid grid--gapeless grid--middle">
                                        <span>$187</span>

                                        <span class="button__icon">
                                          <img src="icons/shopping-basket.svg" alt="">
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>`

  if (drip.has_tag('Email 12 Discount') || drip.has_tag('Easter Egg Discount')) {

      if (drip.has_tag('business starter')){
        response = {
          // PRO
          pricetable: '<p class="price__current-price paragraph">187</p><p class="price__old-price paragraph h2">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/tPjm">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$187</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price paragraph">177</p><p class="price__old-price paragraph h2">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/EjSco">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$177</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$187</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/tPjm">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`,
          // Discount timer
          discount: discount_template
        }
      }
     else if (drip.has_tag('tag business owner')){
        response = {
          // PRO
          pricetable: '<p class="price__current-price paragraph">187</p><p class="price__old-price paragraph h2">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/tPjm">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$187</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price paragraph">177</p><p class="price__old-price paragraph h2">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/EjSco">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$177</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$187</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/tPjm">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`,
          // Discount timer
          discount: discount_template
        }
      }
      else if (drip.has_tag('tag consultant')){
        response = {
          // PRO
          pricetable: '<p class="price__current-price paragraph">187</p><p class="price__old-price paragraph h2">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/tPjm">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$187</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price paragraph">177</p><p class="price__old-price paragraph h2">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/EjSco">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$177</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$187</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/tPjm">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`,
          // Discount timer
          discount: discount_template
        }
      }
      else {
        response = {
          // PRO
          pricetable: '<p class="price__current-price paragraph">187</p><p class="price__old-price paragraph h2">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/tPjm">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$187</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price paragraph">177</p><p class="price__old-price paragraph h2">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/EjSco">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$177</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$187</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/tPjm">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`,
          // Discount timer
          discount: discount_template
        }
      }
  }
  else {
      if (drip.has_tag('business starter')){
        response = {
          // PRO
          pricetable: '<p class="price__current-price price__current-price--center paragraph">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitepro">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$249</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price price__current-price--center paragraph">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitecore">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$229</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$249</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/elitepro">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`
        }
      }
     else if (drip.has_tag('tag business owner')){
        response = {
          // PRO
          pricetable: '<p class="price__current-price price__current-price--center paragraph">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitepro">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$249</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price price__current-price--center paragraph">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitecore">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$229</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$249</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/elitepro">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`
        }
      }
      else if (drip.has_tag('tag consultant')){
        response = {
          // PRO
          pricetable: '<p class="price__current-price price__current-price--center paragraph">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitepro">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$249</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price price__current-price--center paragraph">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitecore">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$229</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$249</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/elitepro">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`
        }
      }
      else {
        response = {
          // PRO
          pricetable: '<p class="price__current-price price__current-price--center paragraph">249</p>',
          price_button: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitepro">
                          <span>Get it now</span>
                          <div class="grid grid--gapeless grid--middle">
                            <span>$249</span>
                            <span class="button__icon">
                              <img src="icons/shopping-basket.svg" alt="">
                            </span>
                          </div>
                        </a>`,
          // Core
          pricetable2: '<p class="price__current-price price__current-price--center paragraph">229</p>',
          price_button2: `<a class="price__button button button--primary button--rounded button--shadow button--expanded" href="https://gum.co/elitecore">
                            <span>Get it now</span>
                            <div class="grid grid--gapeless grid--middle">
                              <span>$229</span>
                              <span class="button__icon">
                                <img src="icons/shopping-basket.svg" alt="">
                              </span>
                            </div>
                          </a>`,
          // Banner
          banner_header: `<h3 class="heading h3 c--white">Buy Growthcasts Elite</h3>
                          <p class="paragraph">With all the bonuses for just <span class="t--bold">$249</span></p>`,
          banner_button: `<a class="button button--white button--rounded button--shadow" href="https://gum.co/elitepro">
                            Get it now
                            <span class="button__icon">
                              <img src="icons/shopping-basket-white.svg" alt="">
                            </span>
                          </a>`,
        }
      }
  }
  return response
}
////////////////// END DRIP PLINKO CODE ///////////////

///////////////////////////// ZODAT HET OPVALT /////////////////////////////////

////////////////////////--------------///////////////////////



window.drip_replacements = {
  '#stat_anon': function(drip) {
    return (drip.is_anon ? "No idea who this is" : "I know this person!")
  },
  '#stat_email': function(drip) {
    return drip.email
  },
  '#stat_offer': function(drip) {
    return JSON.stringify(drip.cn.offer)
  },
  '#stat_leaderboard': function(drip) {
    return JSON.stringify(drip.cn.settings.content_leaderboard())
  },
  '#stat_focus': function(drip) {
    var leader = drip.cn.settings.content_leaderboard()[0]
    if (leader) return leader[0]
  },
  '#stat_tags': function(drip) {
    return drip.tags().join(', ')
  }
}

jQuery(function(){
  window._drip_pro.init({
    debug: true,
    template_path: 'https://s3-us-west-2.amazonaws.com/growthcasts/squarespace-drip/',
    survey_trigger: function() {
      return true // If a question is available, should the survey widget be triggered?
    },
    can_display: function(intent, options) {
      return true // Given the "intent" (like modal), should we show it on this page? Useful for checking to see if you're on the checkout page, etc. and forcing DPT offers to not show.
    },
    pre_init: function() {
      this.settings.track = this.settings.track.bind(this)
      this.settings.score = this.settings.score.bind(this)
      this.settings.increment_score = this.settings.increment_score.bind(this)
      this.settings.content_leaderboard = this.settings.content_leaderboard.bind(this)
    },
    post_drip_response: function(payload) {
      this.settings.track()
      this.settings.score()

      $.each(this.custom_fields(), function(key, value) {
        $('table').append(
          $('<tr>').append(
            $('<th>').text(key),
            $('<td>').text(value)
          )
        )
      })
    },
    score: function(drip) {
      var t = this
      $('.category-name a').each(function() {
        var tag_name = $(this).text()
        tag_name = tag_name.toLowerCase().replace(/ /g, '_')
        t.settings.increment_score(tag_name, "12345")
      })
    },
    increment_score: function(category, article_id) {
      var posts_cache_count = 30
      if (!article_id) return
      var category_posts = (this.custom_fields()[category] || '').split(',')
      category_posts.push(article_id)
      this.add_custom_field(category, _.uniq(_.filter(category_posts)).join(','))
      var recent_posts = (this.custom_fields()['recent_posts'] || '').split(',')
      var o = {} ; o[category] = article_id
      recent_posts.push(JSON.stringify(o))
      this.add_custom_field('recent_posts', _.last(_.uniq(_.filter(recent_posts)), posts_cache_count).join(','))
    },
    content_leaderboard: function() {
      var recent_posts = (this.custom_fields()['recent_posts'] || '').split(',')
      recent_posts = _.map(_.filter(recent_posts), JSON.parse)
      total_posts = recent_posts.length
      var posts_summary = {}
      _.each(recent_posts, function(tuple) {
        var key = _.keys(tuple)[0]
        var value = tuple[key]
        posts_summary[key] = posts_summary[key] || []
        posts_summary[key].push(value)
      })
      _.each(posts_summary, function(value, key) {
        percent = value.length / total_posts
        posts_summary[key] = percent
      })
      var posts_ranked = _.sortBy(_.pairs(posts_summary), function(arr) {
        return arr[1]
      }).reverse()
      return posts_ranked
    },
    track: function() {
      var traits = { anon: true }
      if (!this.is_anon) {
        traits = {
          anon: false,
          email: this.drip_contact.email,
          firstName: this.custom_fields()['MS_FNAME'],
          lastName: this.custom_fields()['MS_LNAME']
        }
        $.each(this.tags(), function(idx, key) {
          traits[key] = true
        })
      }

      traits = $.extend(traits, this.custom_fields())
      analytics.identify(traits.email, traits)

      if (window.mp) {
        analytics.track(window.mp[0], window.mp[1])
      }

      if ($('.article-header h1').length) {
        this.add_tag('Read - ' + $('.article-header h1').text())
      }
    },
    survey_widget: function(survey, drip) {
      $('.survey-question').text(survey.question)
      $.each(survey.keys, function(idx, key) {
        var li = $('<li>').attr('data-value', key).text(survey.answers[key])
        $('.survey-answers').append(li)
      })
      $('#survey-container').css('bottom', 0)
      $('#survey-container li').click(function(e){
        var value = $(this).data('value')
        drip.add_custom_field(survey.attr, value)
        $('#survey-container .survey-answers').hide()
        $('#survey-container .survey-question').text('Thanks!')
      })
      $('#survey-container .close-survey').click(function(e){
        e.preventDefault()
        $('#survey-container').remove()
      })
    },
    renderers: {

      modal: function(intent, content, options) {
        if (this.modal_setup) return
        window._delayTimer = null
        sensitivity = 20
        delay = 1000

        function handleMouseEnter(e) {
          if (_delayTimer) {
            clearTimeout(_delayTimer);
            _delayTimer = null;
          }
        }

        function handleMouseLeave(e) {
          var t = this
          var cookie_name = this.settings.cookie_prefix+'_ig_'+intent
          if (e.clientY > sensitivity) return
          if (this.storage.get(cookie_name)) return

          _delayTimer = setTimeout(function(){
            if (jQuery.modal.isActive()) return
            this.debug('Displaying modal')
            var modal = jQuery('<div class="modal">')
                          .data('placeholder', intent)
                          .html(content)
                          .appendTo('body')
                          .modal()
            modal.on('modal:after-close', function(){
              t.storage.set(cookie_name, '1')
            })
          }.bind(this), delay);
        }

        jQuery('body').on('mouseenter', handleMouseEnter);
        jQuery('body').on('mouseleave', handleMouseLeave.bind(this));
        this.modal_setup = true
      }

    }
  })
})

function getTime(date) {
  var total = Date.parse(date) - Date.parse(new Date())

  let seconds = Math.floor( (total / 1000) % 60 )
  var minutes = Math.floor((total / 1000 / 60) % 60)
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  var days = Math.floor(total / (1000 * 60 * 60 * 24))

  return {
    'total': total,
    'days': ("0" + days.toString()).split('').slice(-2),
    'hours': ("0" + hours.toString()).split('').slice(-2),
    'minutes': ("0" + minutes.toString()).split('').slice(-2),
    'seconds': ("0" + seconds.toString()).split('').slice(-2)
  }
}
