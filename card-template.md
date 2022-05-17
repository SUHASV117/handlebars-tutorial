# <p align=center> **Implementation Summary of** <br> _2020 International Society of Hypertension <br> Global Hypertension Practice guidelines_</p>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: block;
  height: 126px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  overflow: scroll;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 6px 16px 3px;
}
</style>

{{#each tableSummary.rows}}

<div class="card" style="width: 100%;">
  <div class="container">
    {{#each cpgSection}}
    <p><a href="{{url}}">{{label}}</a>:&nbsp{{content}}</p>
    {{/each}}
    {{#each description}}
    <p>Remarks: {{text}}</p>
    {{/each}}
    <p>CQL code:</p>
    <p>
    {{#each cqlCode}}
    <a href="{{url}}">{{label}}</a>,
    {{/each}}
    </p>
    <p>References:</p>
    {{#each reference}}
    <ul>
    <li><a href="{{url}}" target="_blank">{{label}}</a>,</li>
    </ul>
    {{/each}}
  </div>
</div>
{{/each}}
