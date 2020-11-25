## Tests des Use Cases:	
>**name**: TC-1  
>**description**: Dieser Testcase pingt www.google.com in einem hidden Window via Powershell an
  
>**productive_execution**: Valid  
>**productive_execution_explanation**: None  
>**supported_platforms**: ['windows']  
> + ### dependencies
>>**description**: None

>>**prereq_command**: `exit 0
`

>>**get_prereq_command**: `echo None
`

> + ### executor
>>**name**: command_prompt
>>**command**: `PowerShell.exe -WindowStyle Hidden -Command ping www.google.com
`

>**name**: TC-2  
>**description**: Dieser Testcase pingt www.google.com in einem hidden Window via Powershell mit automatischer Vervollständigung an
  
>**productive_execution**: Valid  
>**productive_execution_explanation**: None  
>**supported_platforms**: ['windows']  
> + ### dependencies
>>**description**: None

>>**prereq_command**: `exit 0
`

>>**get_prereq_command**: `echo None
`

> + ### executor
>>**name**: command_prompt
>>**command**: `PowerShell.exe -w hid -Command ping google.com
`

## display\_name:	Hidden Window
## attack\_technique:	T1143
