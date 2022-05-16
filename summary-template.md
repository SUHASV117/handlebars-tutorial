# <p align=center> **Implementation Summary of** <br> _2020 International Society of Hypertension <br> Global Hypertension Practice guidelines_</p>

<!--
|CPG Sections| CQL Code &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;| Description| References  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; |
| ------------ | -------- | ----------- | ---------- |
{{#each tableSummary.rows}}
        {{#each cpgSection}}
|<a href={{url}} target="_blank"><ins>{{label}}</ins></a><br/>|{{/each}}{{#each cqlCode}}|<a href={{url}} target="_blank"><ins>{{label}}</ins></a><br/>
        {{/each}}
        {{#each description}}
        |<ins>{{text}}</ins>
        {{/each}}
        {{#each reference}}
        |<a href={{url}} target="_blank"><ins>{{label}}</ins></a><br/>
        {{/each}}
{{/each}}

 -->

<style>
td{
    color:red;
},
th {
    text-align:left
}
</style>

<table class="annotation-display">
      <tr>
        <th>CPG Sections</th>
        <th>CQL Code</th>
        <th>Description</thalign=>
        <th>References</th>
      </tr>
      {{#each tableSummary.rows}}
      <tr>
        <td>
          {{#each cpgSection}}
          <a href={{url}} target="_blank"><u>{{label}}</u></a><br/>
          {{/each}}
        </td>
        <td width="25%">
          {{#each cqlCode}}
          <a href={{url}} target="_blank"><u>{{label}}</u></a><br/>
          {{/each}}
        </td>
        <td>
          {{#each description}}
          <p>{{text}}</p><br/>
          {{/each}}
        </td>
        <td width="15%">
          {{#each reference}}
          <a href={{url}} target="_blank"><u>{{label}}</u></a><br/>
          {{/each}}
        </td>
      </tr>
      {{/each}}
    </table>

<!--

|CPG Sections| CQL Code &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;| Description| References  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; |
|------------|---------|------------|-----------|

{{#each tableSummary.rows}}
|{{#each cpgSection}}
<a href={{url}} target="_blank"><ins>{{label}}</ins></a><br/> <a href={{url}} target="_blank"><ins>{{label}}</ins></a><br/> {{/each}}| | | |
 {{/each}} -->
