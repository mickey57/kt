var options="";
$("#district").on('change',function(){
  var value=$(this).val();
  if(value=="bolesławiecki")
  {
    options="";
    var boleslawieckicommunities = ['Wybierz gminę','Nowogrodziec','Bolesławiec','Gromadka','Osiecznica','Warta Bolesławiecka'];
    for(city of boleslawieckicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="dzierżoniowski")
  {
    options="";
    var dzierzoniowskicommunities = ['Wybierz gminę','Niemcza','Dzierżoniów','Łagiewniki','Bielawa','Pieszyce','Piława Górna'];
    for(city of dzierzoniowskicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="głogowski")
  {
    options="";
    var glogowskicommunities = ['Wybierz gminę','Głogów','Jerzmanowa','Kotla','Pęcław','Żukowice'];
    for(city of glogowskicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="górowski")
  {
    options="";
    var gorawskicommunities = ['Wybierz gminę','Góra','Jemielno','Niechlów','Wąsosz'];
    for(city of gorawskicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="jaworski")
  {
    options="";
    var jaworskicommunities = ['Wybierz gminę','Bolków','Męcinka','Mściwojów','Paszowice','Wądroże Wielkie','Jawor'];
    for(city of jaworskicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="kamiennogórski")
  {
    options="";
    var kamiennogorskicommunities = ['Wybierz gminę','Lubawka','Kamienna Góra','Marciszów'];
    for(city of kamiennogorskicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="karkonoski")
  {
    options="";
    var karkonoskicommunities = ['Wybierz gminę','Janowice Wielkie','Jeżów Sudecki','Mysłakowice','Podgórzyn','Stara Kamienica',
    'Karpacz','Kowary','Piechowice','Szklarska Poręba'];
    for(city of karkonoskicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="kłodzki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Bystrzyca Kłodzka','Lądek-Zdrój','Międzylesie','Radków',
      'Stronie Śląskie','Szczytna','Kłodzko','Lewin Kłodzki','Nowa Ruda','Duszniki-Zdrój','Kudowa-Zdrój','Polanica-Zdrój'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="legnicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Prochowice','Krotoszyce','Kunice','Legnickie Pole',
      'Miłkowice','Ruja','Chojnów'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="lubański")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Leśna','Lubań','Olszyna','Świeradów-Zdrój',
      'Lubań','Platerówka','Siekierczyn'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="lubiński")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Ścinawa','Lubin', 'Rudna'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="lwówecki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Gryfów Śląski','Lubomierz','Lwówek Śląski','Mirsk','Wleń'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="milicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Milicz','Cieszków','Krośnice'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="oleśnicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Bierutów','Międzybórz','Syców','Twardogóra','Dobroszyce','Dziadowa Kłoda','Oleśnica'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="oławski")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Jelcz-Laskowice','Domaniów','Oława'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="polkowicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Chocianów','Polkowice','Przemków','Gaworzyce','Grębocice','Radwanice'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="średzki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Środa Śląska','Kostomłoty','Malczyce','Miękinia','Udanin'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="strzeliński")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Strzelin','Wiązów','Borów','Kondratowice','Przeworno'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="świdnicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Jaworzyna Śląska','Strzegom','Żarów','Dobromierz','Marcinowice','Świdnica','Świebodzice'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="trzebnicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Oborniki Śląskie','Prusice','Trzebnica','Żmigród','Wisznia Mała','Zawonia'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="wałbrzyski")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Głuszyca','Mieroszów','Czarny Bór','Stare Bogaczowice','Walim',
        'Boguszów-Gorce','Jedlina-Zdrój','Szczawno-Zdrój'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="wołowski")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Brzeg Dolny','Wołów','Wińsko'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="wrocławski")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę', 'Kąty Wrocławskie','Siechnice','Sobótka','Czernica','Długołęka',
        'Jordanów Śląski','Kobierzyce','Mietków','Żórawina'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="ząbkowicki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę', 'Bardo','Ząbkowice Śląskie','Ziębice','Złoty Stok','Ciepłowody',
      'Kamieniec Ząbkowicki','Stoszowice'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="zgorzelecki")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Bogatynia','Pieńsk','Węgliniec','Sulików','Zawidów','Zgorzelec'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else if(value=="złotoryjski")
  {
    options="";
    var klodzkicommunities = ['Wybierz gminę','Świerzawa','Pielgrzymka','Zagrodno','Złotoryja','Wojcieszów'];
    for(city of klodzkicommunities){
      options +=`<option value=${city}>${city}</option>`;
    }
    $("#community").html(options);
  }
  else {
    $("#community").html(options);
  }
});



