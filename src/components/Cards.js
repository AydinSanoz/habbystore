import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActivityRoller from './ActivityRoller';
import {dCard, pCard, cCard, imageCard} from './styles';
import {Text1, Text2} from './Texts';
import TitleText from './TitleText';

// count: 10;
// description: '';
// id: 192;
// image: null;
// name: 'Deri Biye';
// parent: 45;
// permalink: 'https://habby.store/product-category/aksesuarlar/biye/deri-biye/';
// review_count: 0;
// slug: 'deri-biye';

export function ImageCard({source, text}) {
  const src = {uri: source};
  return (
    <View style={imageCard.container}>
      <Image source={src} style={imageCard.img} />
      <TitleText>{text}</TitleText>
    </View>
  );
}
export function ListCard(props) {
  const {id, name, count, parent, navigation, route} = props;

  return (
    <View>
      <TouchableOpacity style={cCard.container} onPress={props.onPress}>
        <Text1>{name}</Text1>
        <Text2>{count}</Text2>
      </TouchableOpacity>
    </View>
  );
}

export function DetailedCard(props) {
  const {item} = props;
  console.log('🚀 ~ file: Cards.js ~ line 50 ~ DetailedCard ~ item', item);

  return (
    <View>
      <TouchableOpacity style={cCard.container} onPress={() => null}>
        <ImageBackground
          style={cCard.img}
          source={
            require('../assets/habby-logo.png')
            // {uri: item.image.src}
          }>
          {props.children}
        </ImageBackground>
        {/* <Text style={{fontSize: 15, padding: 5}}>{category?.name}</Text> */}
      </TouchableOpacity>
      {null}
    </View>
  );
}
/*
attributes: Array(2)
0: {id: 3, name: "Genişlik", option: "20mm"}
1: {id: 2, name: "Uzunluk", option: "25 M"}
length: 2
__proto__: Array(0)
backordered: false
backorders: "no"
backorders_allowed: false
date_created: "2021-03-18T11:55:40"
date_created_gmt: "2021-03-18T08:55:40"
date_modified: "2021-04-09T11:00:15"
date_modified_gmt: "2021-04-09T08:00:15"
date_on_sale_from: null
date_on_sale_from_gmt: null
date_on_sale_to: null
date_on_sale_to_gmt: null
description: ""
dimensions: {length: "", width: "", height: ""}
download_expiry: -1
download_limit: -1
downloadable: false
downloads: []
id: 4468
image: {id: 4512, date_created: "2021-03-18T15:53:49", date_created_gmt: "2021-03-18T09:53:49", date_modified: "2021-03-18T15:53:49", date_modified_gmt: "2021-03-18T09:53:49", …}
manage_stock: false
menu_order: 9
meta_data: [{…}]
on_sale: false
permalink: "https://habby.store/urun/habby-dokuma-lastik-beyaz/?attribute_pa_genislik=20mm-2&attribute_pa_uzunluk=25-m"
price: "0"
purchasable: false
regular_price: "0"
sale_price: ""
shipping_class: ""
shipping_class_id: 0
sku: "8681425568973"
status: "publish"
stock_quantity: null
stock_status: "instock"
tax_class: ""
tax_status: "taxable"
virtual: false
weight: ""
woo_variation_gallery_images: (5) [{…}, {…}, {…}, {…}, {…}]
*/

export function ProductsCard({item, navigation, route}) {
  console.log('🚀 ~ file: Cards.js ~ line 79 ~ ProductsCard ~ item', item);
  function ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      {!item?.images[0]?.src > 0 ? (
        <ActivityRoller />
      ) : (
        <View style={pCard.container}>
          <Image style={pCard.img} source={{uri: item.images[0].src}} />

          <View style={pCard.textContainer}>
            {/* <View style={pCard.textContent}> */}
            <Text style={pCard.title}>{item.name}</Text>
            <View style={pCard.priceContent}>
              {/* <Text style={pCard.regularPrice}>{item.regular_price} TL</Text>
              <Text style={pCard.price}>{item.sale_price} TL</Text> */}

              <HTMLView style={pCard.price}>{item.price_html}</HTMLView>
            </View>
            <View style={pCard.ratingContent}>
              {!item.review_count > 0 && (
                <View style={pCard.rating}>
                  <Rating
                    type="star"
                    ratingBackgroundColor="#c8c7c8"
                    // startingValue={item.average_rating}
                    startingValue={2.5}
                    imageSize={20}
                    // onFinishRating={ratingCompleted}
                    style={{paddingVertical: 10}}
                    // showRating
                  />
                  <Text>({item.rating_count})</Text>
                </View>
              )}
              {item.has_options && (
                <Icon.Button
                  name="menu"
                  size={20}
                  color="red"
                  borderRadius={99}
                  // backgroundColor="#ddd"
                  backgroundColor="transparent"
                  onPress={() => alert('hasOption')}
                />
              )}
            </View>
            {/* </View> */}
            <View style={pCard.bottom}>
              {item.stock_status !== 'inStock' ? (
                <Text style={pCard.quantity}>
                  Quantity:{item.stock_quantity}
                </Text>
              ) : (
                <Text style={pCard.stock}>Not in Stock</Text>
              )}
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
/*
attributes: (2) [{…}, {…}]
average_rating: "0.00"
backordered: false
backorders: "no"
backorders_allowed: false
button_text: ""
catalog_visibility: "visible"
categories: [{…}]
cross_sell_ids: []
date_created: "2021-03-18T14:04:43"
date_created_gmt: "2021-03-18T11:04:43"
date_modified: "2021-04-09T10:54:32"
date_modified_gmt: "2021-04-09T07:54:32"
date_on_sale_from: null
date_on_sale_from_gmt: null
date_on_sale_to: null
date_on_sale_to_gmt: null
default_attributes: []
description: "<p>Habby dokuma lastikler polyester iplik ve doğal kauçuk lateksten üretilmiştir. Materyal oranı %55 polyester iplik (PES), %45 Doğal kauçuk (ED)’tur. Fabrikamızın ürünleri kalite bazında birçok sertifikaya sahiptir. Müşteri memnuniyeti ve kalite yönetiminde standardı sağlamak için ISO 9001 sertifikasına sahibiz. Çevre yönetim sistemlerinin standardını sağlamak amacıyla ISO 14001 sertifikasına sahibiz. Çalışanlarımızın sağlığını korumak için iş sağlığı güvenliğini önemsiyoruz. Bu doğrultuda ISO 18001 OHSAS sertifikalarına sahibiz.<br />↵Habby dokuma lastikleri siyah ve beyaz olarak 2 renkte; 10, 15, 20, 25, 30, 40 ve 50mm genişliğinde; 3, 5, 10, ve 25 metre uzunluk olarak satışa sunulmuştur.<br />↵Habby dokuma lastiklerini aileniz ile birlikte dikiş projeleri yapmak için kullanabilirsiniz, aynı zamanda Habby dokuma lastikleri maskeler, medikal tıbbi malzemeler  DIY projeleri, dikiş malzemesi  şort, etek, kedi ve köpek tasması, ajanda, saç bantları, iç çamaşırı, ayakkabı bağcıkları, medikal tıbbi malzemeler, kemerler, bel bantları, elbise lastikleri, gömlek lastikleri, bandana lastiği, koltuk örtüsü lastiği, masa örtüsü lastiği, önlük lastiği, eşofman lastiği, mayo lastiği, bikini lastiği, tulum lastiği, sandalye örtüsü lastiği, uyku bandı lastiği, araba koltuğu kılıfı lastiği, çanta kolu lastiği ajanda lastiği, ev dekorasyonu, tayt lastiği, peruk lastiği, şapka lastiği spor giyim lastiği, DIY takı lastiği  gibi birçok alanlarda kullanabilirsiniz. Aynı zamanda el işi projelerinde de kullanabilirsiniz.<br />↵Habby dokuma lastiklerin yanında; örme lastikleri, renkli dokuma lastikleri, çizgili dokuma lastikleri, desenli dokuma lastikleri, baskılı dokuma lastikleri, simli dokuma lastikleri, Mus lastikleri, kaplama lastikleri Ayakkabı lastikleri, katlanır lastik, saten kurdele, dokuma şerit lastikleri, balıksırtı şerit lastikleri, çanta kolonu lastikleri, yassı lastikleri, yuvarlak lastikleri, bebe lastikleri, tres kordon lastikleri, tutu lastikleri, ilikli lastikleri üretmektedir. Aynı zamanda kemerler, pantolon askıları  gibi aksesuar ürünleri üretmektir.</p>↵<h3 style="margin-top:20px">Neden Habby?</h3>↵<ul>↵<li>     Sektörde 25 yıllık tecrübe ve en iyi kalite</li>↵<li>↵      Uygun ve rekabetçi fiyatlar </li>↵<li>↵    %100 numune eşleşmesi</li>↵<li>↵      Modern makine ve ekipmanlarla profesyonel üretim  </li>↵<li>↵        Zamanında ve hızlı teslimat  </li>↵<li>↵       Alternatif renk ve modellerde profesyonel destek</li>↵</ul>↵"
dimensions: {length: "", width: "", height: ""}
download_expiry: -1
download_limit: -1
downloadable: false
downloads: []
external_url: ""
featured: false
grouped_products: []
id: 4290
images: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
manage_stock: false
menu_order: 0
meta_data: (5) [{…}, {…}, {…}, {…}, {…}]
name: "HABBY DOKUMA LASTİK SİYAH"
on_sale: false
parent_id: 0
permalink: "https://habby.store/urun/habby-dokuma-lastik-siyah/"
price: "0"
price_html: "<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8378;</span>0,00</bdi></span>"
purchasable: false
purchase_note: ""
rating_count: 0
regular_price: ""
related_ids: [4268]
reviews_allowed: true
sale_price: ""
shipping_class: ""
shipping_class_id: 0
shipping_required: true
shipping_taxable: true
short_description: ""
sku: ""
slug: "habby-dokuma-lastik-siyah"
sold_individually: false
status: "publish"
stock_quantity: null
stock_status: "instock"
tags: []
tax_class: ""
tax_status: "taxable"
total_sales: 0
type: "variable"
upsell_ids: []
variations: (21) [4410, 4411, 4409, 4406, 4407, 4408, 4403, 4404, 4405, 4398, 4399, 4397, 4400, 4402, 4401, 4412, 4413, 4414, 4415, 4416, 4417]
virtual: false
weight: ""
yoast_head: "<!-- This site is optimized with the Yoast SEO plugin v15.7 - https://yoast.com/wordpress/plugins/seo/ -->↵<title>HABBY DOKUMA LASTİK SİYAH - Habby Store</title>↵<!-- Yalnızca yönetici uyarısı: Bu sayfa bir meta açıklaması, olmadığı için, göstermiyor; ya bu sayfa için özel olarak yazın ya da [SEO - Arama görünürlüğü] menüsüne gidin ve bir şablon oluşturun. -->↵<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />↵<link rel="canonical" href="https://habby.store/urun/habby-dokuma-lastik-siyah/" />↵<meta property="og:locale" content="tr_TR" />↵<meta property="og:type" content="article" />↵<meta property="og:title" content="HABBY DOKUMA LASTİK SİYAH - Habby Store" />↵<meta property="og:description" content="Habby dokuma lastikler polyester iplik ve doğal kauçuk lateksten üretilmiştir. Materyal oranı %55 polyester iplik (PES), %45 Doğal kauçuk (ED)’tur. Fabrikamızın ürünleri kalite bazında birçok sertifikaya sahiptir. Müşteri memnuniyeti ve kalite yönetiminde standardı sağlamak için ISO 9001 sertifikasına sahibiz. Çevre yönetim sistemlerinin standardını sağlamak amacıyla ISO 14001 sertifikasına sahibiz. Çalışanlarımızın sağlığını korumak için iş sağlığı [...]" />↵<meta property="og:url" content="https://habby.store/urun/habby-dokuma-lastik-siyah/" />↵<meta property="og:site_name" content="Habby Store" />↵<meta property="article:modified_time" content="2021-04-09T07:54:32+00:00" />↵<meta property="og:image" content="https://habby.store/wp-content/uploads/2021/03/dokuma-10-mm-siyah.jpg" />↵	<meta property="og:image:width" content="2000" />↵	<meta property="og:image:height" content="2000" />↵<meta name="twitter:card" content="summary_large_image" />↵<meta name="twitter:label1" content="Tahmini okuma süresi">↵	<meta name="twitter:data1" content="2 dakika">↵<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://habby.store/#website","url":"https://habby.store/","name":"Habby Store","description":"Bir ba\u015fka WordPress sitesi","potentialAction":[{"@type":"SearchAction","target":"https://habby.store/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"tr"},{"@type":"ImageObject","@id":"https://habby.store/urun/habby-dokuma-lastik-siyah/#primaryimage","inLanguage":"tr","url":"https://habby.store/wp-content/uploads/2021/03/dokuma-10-mm-siyah.jpg","width":2000,"height":2000},{"@type":"WebPage","@id":"https://habby.store/urun/habby-dokuma-lastik-siyah/#webpage","url":"https://habby.store/urun/habby-dokuma-lastik-siyah/","name":"HABBY DOKUMA LAST\u0130K S\u0130YAH - Habby Store","isPartOf":{"@id":"https://habby.store/#website"},"primaryImageOfPage":{"@id":"https://habby.store/urun/habby-dokuma-lastik-siyah/#primaryimage"},"datePublished":"2021-03-18T11:04:43+00:00","dateModified":"2021-04-09T07:54:32+00:00","inLanguage":"tr","potentialAction":[{"@type":"ReadAction","target":["https://habby.store/urun/habby-dokuma-lastik-siyah/"]}]}]}</script>↵<!-- / Yoast SEO plugin. -->"
_links: {self: Array(1), collection: Array(1)}

*/
export function DetailsCard({source}, props) {
  const src = {uri: source};
  return (
    <View style={dCard.container}>
      <ImageCard style={dCard.img} source={src} />
    </View>
  );
}
