<template>
  <section>
    <h3>Messages</h3>
    <div>
      <table class="table">
        <tbody
          v-for="(m, km) in messages"
          :key="km"
          :class="m.read ? 'read' : 'unread'"
        >
          <tr class="msg__title">
            <td>
              <input type="checkbox" @click="readmess(km)" class="check" />
              <span
                :style="m.to ? 'color:red' : 'color:purple'"
                @click="showmess(km)"
                >{{ m.to == userloginid ? "inbox" : "outbox" }}</span
              >
              <span @click="showmess(km)">
                {{ m.type === "system" ? "system" : users[m.from].login }}</span
              >
            </td>
            <td @click="showmess(km)">{{ m.title }}</td>
          </tr>
          <tr v-show="m.show" class="msg__body">
            <td
              colspan="3"
              :style="m.read ? 'font-weight:normal' : 'font-weight:bold'"
              class="msg__body"
            >
              <div v-html="m.body"></div>
            </td>
          </tr>
          <tr
            v-if="
              m.show &&
              m.type === 'user-add' &&
              !addfriendflag &&
              m.to == userloginid
            "
            class="msg__body"
          >
            <td colspan="3">
              <button class="btn btn-success" @click="addfriend(m.from)">
                Add friend
              </button>
            </td>
          </tr>
          <tr
            v-if="
              m.show &&
              m.type === 'group-add' &&
              !addgroupflag &&
              m.to == userloginid
            "
            class="msg__body"
          >
            <td colspan="3">
              <button class="btn btn-success" @click="addgroup(m.groupId)">
                Follow
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <app-addmessage
      :friends="friends"
      :userloginid="userloginid"
      @addmessage="addmsg"
    ></app-addmessage>
  </section>
</template>
<script>
import Addmessage from "./Addmessage.vue";

export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    friends: {
      type: Array,
      required: true,
    },
    userloginid: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      addfriendflag: false,
      addgroupflag: false,
      editMessages: [],
    };
  },
  methods: {
    readmess(id) {
      this.editMessages[id].read = !this.messages[id].read;
    },
    showmess(id) {
      this.editMessages[id].show = !this.messages[id].show;
    },
    addfriend(id) {
      this.$emit("addfriend", id);
      this.addfriendflag = true;
    },
    addgroup(id) {
      this.$emit("addgroup", id);
      this.addgroupflag = true;
    },
    addmsg() {
      this.$emit("addmessage");
    },
  },
  components: {
    appAddmessage: Addmessage,
  },
  mounted() {
    this.editMessages = this.messages;
  },
};
</script>
