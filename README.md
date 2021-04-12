# Option 5

## Not working

### Code:

```typescript
@Schema({ _id: false })
export class Name extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);

@Schema()
export class User extends Document {
  @Prop({ type: [{ type: Name }] })
  names: [Name];
}

export const UserSchema = SchemaFactory.createForClass(User);
```


### The error:

````
TypeError: Invalid schema configuration: `Name` is not a valid type within the array `names`.See http://bit.ly/mongoose-schematypes for a list of valid schema types.
app_1    |     at Schema.interpretAsType (/usr/src/app/node_modules/mongoose/lib/schema.js:978:15)
app_1    |     at Schema.path (/usr/src/app/node_modules/mongoose/lib/schema.js:680:27)
app_1    |     at Schema.add (/usr/src/app/node_modules/mongoose/lib/schema.js:532:14)
app_1    |     at new Schema (/usr/src/app/node_modules/mongoose/lib/schema.js:129:10)
app_1    |     at Function.createForClass (/usr/src/app/node_modules/@nestjs/mongoose/dist/factories/schema.factory.js:11:16)
app_1    |     at Object.<anonymous> (/usr/src/app/dist/user.schema.js:40:47)
```
