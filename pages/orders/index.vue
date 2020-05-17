<template>
  <div>
    <hr />
    <div class="row justify-content-center">
      <h4>Danh sách đơn hàng của shop</h4>
    </div>
    <br />
    <b-card>
      <div class>
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <!-- <button class="btn btn-outline-success" type="button" style="margin-left:20px">tình trạng</button> -->
              <div class="col-md-8">
                <multiselect
                  v-model="value"
                  :options="options"
                  placeholder="Select one"
                  label="name"
                  track-by="name"
                  :allow-empty="false"
                  v-on:input="changeOption"
                ></multiselect>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <b-input-group>
              <template v-slot:prepend>
                <div>
                  <b-dropdown :text="sortBy.col" variant="outline-success">
                    <b-dropdown-item
                      :value="sortModel[1].col"
                      @click="sortBy=sortModel[0]"
                    >ngày giao</b-dropdown-item>
                    <b-dropdown-item
                      :value="sortModel[0].col"
                      @click="sortBy=sortModel[1]"
                    >ngày nhập</b-dropdown-item>
                  </b-dropdown>
                  <b-dropdown :text="sortDesc==true?'giảm':'tăng'" variant="outline-success">
                    <b-dropdown-item @click="sortDesc=false">tăng</b-dropdown-item>
                    <b-dropdown-item @click="sortDesc=true">giảm</b-dropdown-item>
                  </b-dropdown>
                </div>
              </template>

              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Type to Search"
              ></b-form-input>
              <template v-slot:append>
                <b-button variant="outline-success" type="button">Search</b-button>
              </template>
            </b-input-group>
          </div>
        </div>
        <br />
        <b-table
          id="my-table"
          :items="items"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          small
          :sort-by.sync="sortBy.key"
          :sort-desc.sync="sortDesc"
          sort-icon-left
          :filter="filter"
        >
          <template v-slot:cell(show_details)="row">
            <b-button
              :to="{ name: 'orders-id', params: { id: row.item.id }}"
              size="sm"
              class="mr-2"
            >Details</b-button>
            <!-- <router-link
                :to="{ name: 'restaurants-id', params: { id: item.id } }"
                class="btn btn-primary"
              >
                See dishes
            </router-link> -->
          </template>
        </b-table>
        <div class="mt-3">
          <p class="mt-3">Current Page: {{ currentPage }}</p>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="center"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @change="currentPageChange"
          ></b-pagination>
        </div>
      </div>
    </b-card>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import Multiselect from "vue-multiselect";
import axios from "~/plugins/axios";
// import axios from 'axios'
export default {
  components: {
    Multiselect: Multiselect
  },
  data() {
    return {
      value: {
        _id: "5dbf8f78b26e8c1ca465954e",
        name: "Mới",
        description: "đơn hàng mới nhận",
        createdAt: "2019-11-04T02:39:52.795Z",
        updatedAt: "2019-11-04T02:48:10.036Z",
        __v: 0,
        priority: "1",
        id: ""
        // id: "5dbf8f78b26e8c1ca465954e"
      },
      options: [],
      filter: null,
      // filterOn: "",
      sortModel: [
        { key: "DeliveryDatetime", col: "ngày giao" },
        { key: "createdAt", col: "ngày nhập" }
      ],
      sortBy: { key: "DeliveryDatetime", col: "ngày giao" },

      sortDesc: false,

      fields: [
        { key: "Customer", label: "Người nhận", sortable: true },
        { key: "DeliveryDatetime", label: "Ngày giao", sortable: true },
        { key: "createdAt", label: "Ngày nhập", sortable: true },
        { key: "orderstatus.name", label: "Trạng thái", sortable: false },
        { key: "id", label: "ID", sortable: false },
        { key: "show_details", label: "Details", sortable: false }
      ],

      perPage: 10,
      currentPage: 1,
      items: [],
      homes: [
        {
          h_id: "3",
          city: "Dallas",
          state: "TX",
          Zip: "75201",
          price: "4"
        },
        {
          h_id: "4",
          city: "Bevery Hills",
          state: "CA",
          Zip: "90210",
          price: "3"
        },
        {
          h_id: "5",
          city: "New York",
          state: "NY",
          Zip: "00010",
          price: "1"
        }
      ],
      itemsdefault: []
    };
  },
  created() {
    this.getOptions();
    this.getShopOrders();
    // this.getOrderDetail();
  },
  computed: {
    rows() {
      return this.items.length;
    },
    user() {
      return this.$store.getters["auth/user"];
    }
  },
  methods: {
    // redirectDetail(id) {
    //   this.$router.push({name:"",param})
    // },
    currentPageChange() {
      // console.log("pagechange");
    },
    changeOption() {
      this.items = this.itemsdefault;
      this.items = this.items.filter(item => {
        return item.orderstatus === this.value.id;
      });
    },
    orderBy(object,key) {
      object.sort((a, b) => Number(a.type) - Number(b.type))
      // console.log(object)
    },
    getShopOrders() {
      if (this.user.shop) {
        let responseVM = axios
          .get(`/shops/${this.user.shop.id}`)
          .then(response => {
            this.itemsdefault = response.data.orders;
            this.items = this.itemsdefault.filter(item => {
              return item.orderstatus === this.value.id;
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    getOrderDetail() {
      let responseVM = axios
        .get(`/orders`)
        .then(response => {
          this.itemsdefault = response.data;
          this.items = response.data.filter(item => {
            return item.orderstatus.name === this.value.name;
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    getOptions() {
      let responseVM = axios
        .get(`/orderstatuses`)
        .then(response => {
          this.orderBy(response.data, "type")
          this.value = response.data[0];
          this.options = response.data;
        })
        .catch(e => {
          console.log(e);
          // this.errors.push(e);
        });
    }
  }
};
</script>

