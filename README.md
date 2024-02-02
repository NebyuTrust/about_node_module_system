About Node.js module system

In this module, we will discuss few things about the node.js module system, and standards that we need to follow using
the module system.

Node.js comes with two types of module systems.

  1. ESM (ECMA Script Module)
  2. Common Js

The de facto is to use the ESM since it has the future, and capable of thinga like dynamic or async importing. But we can not
import json files using ESM as we can in Common Js in addition to missing fields like __dirname__, __filename__, require, and exports
taht we can use for other purposes mainly for file path.

In order to use ESM in your node js project, go to your package,json, and add {"type" : "module"} so that the interpreter understands it. 
Otherwise, error will happen.

Differences between ESM, and CommonJS
  
  1. ESM runs in strict mode. So, there is no need to state "use stric".
  2. ESM is static which means we can not import within control flows. It should be stated on the top of the file. This really helps by optimizing the dependecy graph.
  3. In ESM this returns undefined while in CommonJs refers to exports object.
     

The following are the topics that are covered in this code or project.
  
  1. Reveal module patterns
  2. Dynamic or async importing
  3. How to create the missing fields __dirname__, and __filename__ using ESM?
  4. How to import json files by creating our own require function?

Thanks. For any questions please contact me on LinkedIn, or using the following contact addresses.

LinkedIn - https://www.linkedin.com/in/nebyu-samuel-36614818b/

Phone number - +251923520962

Email - nebyusamuel1537@gmail.com
