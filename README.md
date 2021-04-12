# Option 8

## Not working

### Code:

```typescript
export class Name extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

@Schema()
export class User extends Document {
  @Prop([Name])
  names: [Name];
}

export const UserSchema = SchemaFactory.createForClass(User);
```


### The error:

````
TypeError: Cannot read property 'plugin' of undefined
app_1    |     at Name.Document.$__setSchema (/usr/src/app/node_modules/mongoose/lib/document.js:3043:10)
app_1    |     at new Document (/usr/src/app/node_modules/mongoose/lib/document.js:85:10)
app_1    |     at new Name (/usr/src/app/dist/user.schema.js:15:12)
app_1    |     at AppService.getHello (/usr/src/app/dist/app.service.js:27:17)
app_1    |     at AppController.getHello (/usr/src/app/dist/app.controller.js:20:32)
```
