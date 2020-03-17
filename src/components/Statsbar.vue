<template>
  <b-container>
    <b-row>
      <b-col md>
        <h5>{{ $t("confirmedCases") }}</h5>
        <h1>205</h1>
      </b-col>

      <b-col md>
        <h5>{{ $t("activeCases") }}</h5>
        <h1>204</h1>
      </b-col>

      <b-col md>
        <h5>{{ $t("deceased") }}</h5>
        <h1>0</h1>
      </b-col>

      <b-col md>
        <h5>{{ $t("recovered") }}</h5>
        <h1>1</h1>
      </b-col>

      <b-col md>
        <h5>{{ $t("testsAdministered") }}</h5>
        <h1>1387</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Statsbar"
};
</script>

<style lang="scss" scoped></style>
