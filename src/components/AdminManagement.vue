<template>
  <div class="container">
    <div class="row justify-content-center align-content-center pt-3">
      <div class=" col-md-8 col-12 text-center">
        <h4 class="text-white ">Admin Section</h4>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div
          v-if="showAlert"
          class="alert d-fixed alert-warning alert-dismissible fade show"
          role="alert"
        >
          {{ alertMsg }}
          <button
            @click="showAlert = false"
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <button
              type="button"
              class="btn btn-sm btn-primary"
              @click="
                mode = 'new';
                modal.show();
              "
            >
              Add Link
            </button>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <span class="me-2 text-white app-filter">Filter:</span>
            <div class="w-auto ">
              <select
                class="form-select app-filter "
                v-model="filter"
                aria-label="Default select example"
              >
                <option selected value="all">All</option>
                <option value="app">Applications</option>
                <option value="ui">UI</option>
              </select>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table id="data-table" class="table table-dark table-hover ">
            <thead>
              <tr>
                <th scope="col" class="">Project Name</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">Reg. Date</th>
              </tr>
            </thead>
            <tbody>
              <tr
                @click="clickRow(index)"
                v-for="(portfoiloItem, index) in tableData"
                :key="index"
              >
                <td class="text-capitalize">
                  {{ portfoiloItem.title || "null" }}
                </td>
                <td class="text-capitalize">
                  {{ portfoiloItem.type || "null" }}
                </td>
                <td class="text-capitalize">
                  {{ portfoiloItem.status || "null" }}
                </td>
                <td>10/10/20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div
          class="modal fade"
          ref="exampleModal"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog ">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-white" id="staticBackdropLabel">
                  New Portfoilo Liink
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitForm" ref="modalForm">
                  <div class="mb-3">
                    <label for="" class="form-label text-white">Title</label>
                    <input
                      required
                      v-model="selectedModal.title"
                      type="text"
                      class="form-control"
                      id="title"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label text-white">Link</label>
                    <input
                      v-model="selectedModal.link"
                      required
                      type="text"
                      class="form-control"
                      id="link"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label text-white"
                      >Description</label
                    >
                    <textarea
                      v-model="selectedModal.description"
                      required
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label text-white"
                      >Status</label
                    >
                    <select
                      v-model="selectedModal.status"
                      class="form-select "
                      aria-label="Default select example"
                    >
                      <option :value="null">Select</option>

                      <option selected value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      >
                    </select>
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label text-white"
                      >Type</label
                    >
                    <select
                      v-model="selectedModal.type"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected value="active"
                        >Select Portfoilo Type</option
                      >
                      <option :value="null">Select</option>
                      <option value="app">App</option>
                      <option value="ui">UI</option>
                      >
                    </select>
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label text-white "
                      >Tools Used</label
                    >
                    <select
                      multiple
                      v-model="selectedModal.toolsUsed"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option
                        class="text-capitalize"
                        v-for="(toolsUsed, index) in toolsUsed"
                        :key="index"
                        :value="toolsUsed"
                        >{{ toolsUsed }}</option
                      >
                    </select>
                  </div>

                  <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click="$refs.modalForm.requestSubmit()"
                  type="button"
                  class="btn btn-primary"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from "@/main";
  import { Modal } from "bootstrap";
  import { uuid } from "vue-uuid";

  export default {
    name: "AdminManagement",
    props: {
      msg: String,
    },
    data: function() {
      return {
        mode: "new",
        filter: "all",
        showAlert: false,
        alertMsg: null,
        selectedModal: {
          id: uuid.v1(),
          title: null,
          description: null,
          link: null,
          status: null,
          type: null,
          toolsUsed: [],
        },
        modal: null,
        loading: true,
        originalLinks: [],
        tableData: [],
        config: [],
      };
    },
    watch: {
      filter: function(newValue) {
        switch (newValue) {
          case "app":
            this.tableData = this.appLinks;
            break;
          case "ui":
            this.tableData = this.uiLinks;
            break;

          default:
            this.tableData = this.originalLinks;

            break;
        }
      },
    },
    computed: {
      toolsUsed: function() {
        const toolsUsed = this.config.find((config) => {
          return config.id == "toolsUsed";
        });
        if (!toolsUsed) {
          return [];
        }
        return toolsUsed.toolsUsed;
      },
      appLinks: function() {
        return this.originalLinks.filter((portfoiloLink) => {
          return portfoiloLink.type === "app";
        });
      },
      uiLinks: function() {
        return this.originalLinks.filter((portfoiloLink) => {
          return portfoiloLink.type === "ui";
        });
      },
    },
    methods: {
      clickRow(index) {
        console.log(this.tableData[index]);
        this.selectedModal = this.tableData[index];
        this.mode = "update";
        this.modal.show();
      },
      createLink() {
        db.collection("apps")
          .doc(this.selectedModal.id)
          .set(this.selectedModal)
          .then(() => {
            this.getApps();
            this.modal.hide();
            this.showAlert = true;
            this.alertMsg = "Updated Portfoilo Links Successfully";
          })
          .catch(() => {
            this.showAlert = true;
            this.alertMsg = "Error creating link";
          });
      },
      submitForm() {
        this.createLink();
        // if (this.mode === "new") {
        //   this.createLink();
        // }
      },
      getApps() {
        this.tableData = [];
        this.originalLinks = [];
        db.collection("apps")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.originalLinks.push({ id: doc.id, ...doc.data() });
            });
            this.tableData = [...this.originalLinks];
            this.loading = false;
          });
      },
      getConfig() {
        db.collection("config")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.config.push({ id: doc.id, ...doc.data() });
            });
          });
      },

      initializeApp() {
        this.getApps();
        this.getConfig();
      },
      navigate(id) {
        let url = this.portfoilo_data[id]["url"];
        window.open(url, "_blank");
      },
    },
    mounted() {
      this.initializeApp();
      this.modal = new Modal(this.$refs.exampleModal);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #data-table,
  .modal-content,
  input,
  textarea,
  .alert,
  select {
    font-size: 0.8rem !important;
  }
  .app-filter {
    font-size: 0.9rem;
  }
</style>
