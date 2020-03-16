// Landing page of the app
<template>
  <div class="home">
    <Statsbar />
    <SampleChart />
  </div>
</template>

<script>
import SampleChart from "../components/SampleChart";
import Statsbar from "../components/Statsbar";

export default {
  name: "Home",
  components: { Statsbar, SampleChart }
};
</script>
