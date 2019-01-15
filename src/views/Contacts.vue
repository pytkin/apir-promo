<template>
  <div class="site-content contacts-screen">
    <div class="page-wrap">
      <div :class="[ pageHeader == 0 ? 'page-header page-header0' : '', pageHeader == 1 ? 'page-header page-header1' : '' ]">
        <div class="bgs">
          <div class="bg-wrap">
            <div class="bg1"></div>
            <div class="bg2"></div>
          </div>
        </div>
      </div>
      <div class="page-content">
        <div class="page-number">06</div>
        <h2 class="page-title">Контакты</h2>
        <vue-tabs @tab-change="updateMap">
          <v-tab title="Казань">
            <p>+7 (843) 207-26-95</p>
            <p>info@apir.pro<br>
            ул. Щапова 47/7</p>
          </v-tab>
          <v-tab title="Москва">
            <p>info@apir.pro<br>
            Большой Саввинский пер., д. 12, стр. 3</p>
          </v-tab>
        </vue-tabs>
        <GmapMap
          ref="mapRef"
          :center="{ lat: 55.791856, lng: 49.137643 }"
          :zoom="17"
          :options="{
            disableDefaultUI: true,
            styles: mapStyles
          }"
        >
          <GmapMarker
            :position="{ lat: 55.791856, lng: 49.137643 }"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import { gmapApi } from "vue2-google-maps";

export default {
  name: "contacts",
  components: {
    VueTabs,
    VTab
  },
  data() {
    return {
      pageHeader: 0,
      mapStyles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede"
            },
            {
              lightness: 21
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              lightness: 16
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36
            },
            {
              color: "#333333"
            },
            {
              lightness: 40
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2"
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe"
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // const _that = this;
    // this.$nextTick(function () {
    //   setTimeout(function () {
    //     const styledMapType = new _that.google.maps.StyledMapType(_that.mapStyles, { name: 'Styled' });
    //     _that.$refs.mapRef.$mapPromise.then(map => {
    //       map.mapTypes.set('Styled', styledMapType);
    //       map.setMapTypeId('Styled');
    //     });
    //   }, 1000);
    // });
  },
  computed: {
    google: gmapApi
  },
  methods: {
    updateMap(number) {
      this.$refs.mapRef.$mapPromise.then(map => {
        switch (number) {
          case 0:
            map.panTo({ lat: 55.791856, lng: 49.137643 });
            this.pageHeader = 0;

            new this.google.maps.Marker({
              position: { lat: 55.791856, lng: 49.137643 },
              title: 'ООО "АПИР"',
              map: map
            });
            break;
          case 1:
            map.panTo({ lat: 55.73334, lng: 37.564907 });
            this.pageHeader = 1;

            new this.google.maps.Marker({
              position: { lat: 55.73334, lng: 37.564907 },
              title: 'ООО "АПИР"',
              map: map
            });
            break;
          default:
            map.panTo({ lat: 55.791856, lng: 49.137643 });
            this.pageHeader = 0;
            break;
        }
      });
    }
  }
};
</script>
