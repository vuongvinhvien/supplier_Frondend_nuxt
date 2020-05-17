<template>
  <div v-if="detailOfUser==true">
    <div class="row justify-content-center">
      <h3>Chi tiết đơn hàng</h3>
    </div>
    <b-card bg-variant="light">
      <b-form-group>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="user" fill="purple"></unicon>Khách hàng:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Customer}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="phone" fill="limegreen"></unicon>Số điện thoại:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.PhoneNumber}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="flower" fill="limegreen"></unicon>Chủ đề:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Theme}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="link" fill="limegreen"></unicon>Link sản sản phẩm:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a v-if="ordersDetail.LinkProduct!=null" :href="ordersDetail.LinkProduct" target="_blank">{{ordersDetail.LinkProduct}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="user-plus" fill="limegreen"></unicon>Tên người nhận:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Recipient}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="location-pin-alt" fill="limegreen"></unicon>Địa chỉ:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Address}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="comment-notes" fill="limegreen"></unicon>Ghi chú:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Note}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="sigma" fill="limegreen"></unicon>Số lượng:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Quantity}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="dollar-alt" fill="limegreen"></unicon>Đơn giá:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.Price}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="truck-loading" fill="limegreen"></unicon>Phí ship:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.ShippingFee}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="calendar-alt" fill="limegreen"></unicon>Ngày đặt:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.OrderDate}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="stopwatch-slash" fill="limegreen"></unicon>Ngày giao:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.DeliveryDatetime}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="percentage" fill="red"></unicon>Trạng thái:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <a>{{ordersDetail.orderstatus.name}}</a>
          </b-col>
        </b-row>
        <b-row class="justify-content-md-center" v-if="ordersDetail.orderstatus.type==3">
          <b-col cols="5" sm="4" md="3" offset-sm="2" offset-md="33" offset-lg="2">
            <label class="text-left">
              <unicon name="image-upload" fill="red"></unicon>File ảnh thật:
            </label>
          </b-col>
          <b-col cols="7" sm="6" md="6">
            <b-input-group class>
              <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <b-input-group-append>
                <b-button variant="outline-success" @click="upload1" class="mr-2">Upload</b-button>
              </b-input-group-append>
            </b-input-group>
            <div
              class="img-order"
              v-if="ordersDetail.ImageUrl1!='null' && ordersDetail.ImageUrl1!=''"
            >
              <a :href="ordersDetail.ImageUrl1" target="_blank">
                <img :src="ordersDetail.ImageUrl1" />
              </a>
            </div>
            <!-- <a v-if="ordersDetail.ImageUrl1!='null'" :href="ordersDetail.ImageUrl1">click để xem</a> -->
          </b-col>
        </b-row>

        <b-form-group
          v-if="ordersDetail.orderstatus.type==6"
          label-cols-sm="6"
          class="upload"
          label="File ảnh chứng thực"
          label-align-sm="right"
          label-for
        >
          <div>
            <b-form-file
              v-model="file2"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div style="padding-top:5px">
              <b-button variant="outline-success" @click="upload2" class="mr-2">Upload</b-button>
              <a v-if="ordersDetail.ImageUrl2!='null'" :href="ordersDetail.ImageUrl2">click để xem</a>
            </div>
          </div>
        </b-form-group>

        <div class="row justify-content-center">
          <b-button
            v-if="ordersDetail.orderstatus.type==1"
            variant="outline-success"
            @click="clickApprove"
          >Nhận</b-button>
          <b-button v-if="ordersDetail.orderstatus.type==1" @click="clickReject">Không nhận</b-button>
          <b-button
            v-if="ordersDetail.orderstatus.type==3"
            variant="outline-success"
            @click="clickCompleted"
          >Hoàn thiện</b-button>
          <b-button
            v-if="ordersDetail.orderstatus.type==5"
            variant="outline-success"
            @click="clickShipping"
          >Giao hàng</b-button>
          <b-button
            v-if="ordersDetail.orderstatus.type==6"
            variant="outline-success"
            @click="clickCustomerReceive"
          >Khách đã nhận</b-button>
          <b-button
            v-if="ordersDetail.orderstatus.type==8"
            variant="success"
            disabled
          >Khách hàng đã nhận</b-button>
        </div>
        <div>
          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
          >
            <p>{{Notify}}</p>
            <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="3px"></b-progress>
          </b-alert>
        </div>
        <hr />
      </b-form-group>
    </b-card>
  </div>
</template>
<style scoped lang="scss">
.upload {
  padding-right: 10px !important;
}
.v-icon,
.custom-icon {
  width: 24px;
}
.img-order {
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 15px 1px #524e4ea3;
  width: 100px;
  height: 140px;

  img {
    width: 100px;
    height: 140px;
    border-radius: 4px;
  }
}
</style>
<script>
import axios from "~/plugins/axios";
import Vue from "vue";
import customIcon from "vue-icon/lib/vue-feather.esm";
import Unicon from "vue-unicons";
import {
  uniUser,
  uniFlower,
  uniCalendarAlt,
  uniCommentNotes,
  uniPhone,
  uniUserPlus,
  uniDollarAlt,
  uniPercentage,
  uniBill,
  uniStopwatchSlash,
  uniTruckLoading,
  uniSigma,
  uniLocationPinAlt,
  uniLink,
  uniImageUpload
} from "vue-unicons/src/icons";

Unicon.add([
  uniUser,
  uniFlower,
  uniCalendarAlt,
  uniCommentNotes,
  uniPhone,
  uniUserPlus,
  uniDollarAlt,
  uniPercentage,
  uniBill,
  uniStopwatchSlash,
  uniTruckLoading,
  uniSigma,
  uniLocationPinAlt,
  uniLink,
  uniImageUpload
]);
Vue.use(Unicon);
export default {
  components: {
    customIcon
  },
  data() {
    return {
      baseClass: "v-icon",
      Notify: "",
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      file: null,
      file2: null,
      ordersDetail: {
        _id: "",
        Customer: "",
        PhoneNumber: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
        orderstatus: {
          _id: "",
          name: "",
          description: "",
          createdAt: "",
          updatedAt: "",
          __v: 0,
          priority: "",
          id: ""
        },
        shop: {
          _id: "5db1d1ad5eadc03350b682cf",
          ShopName: "Shop 1",
          createdAt: "2019-10-24T16:30:37.921Z",
          updatedAt: "2019-11-02T05:00:54.489Z",
          __v: 0,
          Address: "địa chỉ 1",
          PhoneNumber: "674643643534",
          ShopOwner: "",
          order: "5dbc0805915b5d3cc071ac59",
          id: "5db1d1ad5eadc03350b682cf"
        },
        id: "5dbfa4f8972f68440c6886f2"
      },
      options: []
    };
  },
  created() {
    this.getOrderDetail();
    this.getOptions();
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    detailOfUser() {
      let user = this.$store.getters["auth/user"];
      if (this.ordersDetail.shop.user == user.id) {
        return true;
      } else {
        return false;
        //  this.$router.push('/')
      }
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert(Notify) {
      this.Notify = Notify;
      this.dismissCountDown = this.dismissSecs;
    },
    update(ordersDetail) {
      axios
        .put(`/orders/${this.id}`, ordersDetail)
        .then(response => {
          // console.log(response);
          this.ordersDetail = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    upload1() {
      const formData = new FormData();
      formData.append("files", this.file);
      axios
        .post(`/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          this.showAlert("Thành công!");
          this.ordersDetail.ImageUrl1 = res.data[0].url;
          this.update(this.ordersDetail);
        })
        .catch(err => {
          alert("Lỗi!!!");
          console.log(err);
        });
    },
    upload2() {
      const formData2 = new FormData();
      formData2.append("files", this.file2);
      axios
        .post(`/upload`, formData2, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          this.showAlert("Thành công!");
          this.ordersDetail.ImageUrl2 = res.data[0].url;
          this.update(this.ordersDetail);
        })
        .catch(err => {
          alert("Lỗi!!!");
          console.log(err);
        });
    },
    getOrderDetail() {
      let getOrderDetail = axios
        .get(`/orders/${this.id}`)
        .then(response => {
          // console.log(response);
          this.ordersDetail = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    clickCustomerReceive() {
      this.ordersDetail.orderstatus = this.options[6];
      let clickReject = axios
        .put(`/orders/${this.id}`, this.ordersDetail)
        .then(response => {
          // console.log(response);
          this.ordersDetail = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    clickShipping() {
      this.ordersDetail.orderstatus = this.options[5];
      let clickReject = axios
        .put(`/orders/${this.id}`, this.ordersDetail)
        .then(response => {
          // console.log(response);
          this.ordersDetail = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    clickCompleted() {
      if (this.ordersDetail.ImageUrl1 == "null") {
        this.showAlert("Ảnh chưa được upload");
      } else {
        this.ordersDetail.orderstatus = this.options[3];
        let clickReject = axios
          .put(`/orders/${this.id}`, this.ordersDetail)
          .then(response => {
            // console.log(response);
            this.ordersDetail = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });
      }
    },
    clickApprove() {
      this.ordersDetail.orderstatus = this.options[2];
      let clickApprove = axios
        .put(`/orders/${this.id}`, this.ordersDetail)
        .then(response => {
          // console.log(response);
          this.ordersDetail = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    clickReject() {
      this.ordersDetail.orderstatus = this.options[1];
      let clickReject = axios
        .put(`/orders/${this.id}`, this.ordersDetail)
        .then(response => {
          // console.log(response);
          this.ordersDetail = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    orderBy(object, key) {
      object.sort((a, b) => Number(a.type) - Number(b.type));
    },
    getOptions() {
      let getOptions = axios
        .get(`/orderstatuses`)
        .then(response => {
          this.orderBy(response.data, "type");
          // console.log(response.data);
          this.options = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    handleFileUpload() {}
  }
};
</script>