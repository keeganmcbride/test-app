// Landing page of the app
<template>
  <div class="home">
    <Statsbar />
    <SampleChart />
  </div>
</template>

<script>
import Statsbar from "../components/Statsbar";
import SampleChart from "../components/SampleChart";

export default {
  name: "Home",
  components: { Statsbar, SampleChart }
};
</script>
