# <p align=center> **Implementation Summary of** <br> _2020 International Society of Hypertension <br> Global Hypertension Practice guidelines_</p>

<style>
/* th {
    text-align:center
} */
</style>

<table class="annotation-display">
      <tr>
        <th style="text-align:center">CPG Sections</th>
        <th style="text-align:center">CQL Code</th>
        <th style="text-align:center">Description</thalign=>
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
