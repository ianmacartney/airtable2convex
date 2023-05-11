import { defineSchema, defineTable } from "convex/schema";
import { v } from "convex/values";

export default defineSchema({
  Dresses: defineTable({
    airtableId: v.string(),
    Dress_Name: v.optional(v.string()),
    Price: v.optional(v.number()),
    Image_front: v.optional(v.any()),
    Image_back: v.optional(v.any()),
    Disqualified_Reason: v.optional(v.string()),
    Final_Decision: v.optional(v.string()),
    Dress_ID: v.optional(v.string()),
    URL: v.optional(v.string()),
    Kate_Comments: v.optional(v.string()),
    Katy_Comments: v.optional(v.string()),
    Jordan_Comments: v.optional(v.string()),
    Lucy_Comments: v.optional(v.string()),
    Has_Slit: v.optional(v.boolean()),
    Chiffon: v.optional(v.boolean()),
    Floor_Length: v.optional(v.boolean()),
    Which_alphabet_group: v.optional(v.array(v.string())),
    fldz5Jrr1bhzGGWob: v.optional(v.array(v.id('undefined'))),
    All_Field_Types: v.optional(v.array(v.string())),
    fldKTknu2EnmqIBkM: v.optional(v.array(v.id('All_Field_Types'))),
  }).index("by_airtable_id", ["airtableId"]),
  All_Field_Types: defineTable({
    airtableId: v.string(),
    Name: v.optional(v.string()),
    Notes: v.optional(v.string()),
    Assignee: v.optional(v.any()),
    Status: v.optional(v.union(
      v.literal("Todo"),
      v.literal("In progress"),
      v.literal("Done"),
    )),
    Attachment: v.optional(v.any()),
    Checkbox: v.optional(v.boolean()),
    Multiple_select_streets: v.optional(v.array(v.union(
      v.literal("Frederick"),
      v.literal("Ashbury"),
      v.literal("Carl"),
      v.literal("Cole"),
    ))),
    Date: v.optional(v.any()),
    Phone_number: v.optional(v.any()),
    Email: v.optional(v.any()),
    URL: v.optional(v.string()),
    Number: v.optional(v.number()),
    Value: v.optional(v.number()),
    Percent: v.optional(v.any()),
    Duration: v.optional(v.any()),
    Rating: v.optional(v.any()),
    Calculation: v.optional(v.any()),
    Dresses: v.optional(v.array(v.string())),
    fldc74fAToOOqeIci: v.optional(v.array(v.id('Dresses'))),
    Price_from_Dresses: v.optional(v.any()),
    Price_Rollup_from_Dresses: v.optional(v.any()),
    Count_Dresses: v.optional(v.any()),
    Created: v.optional(v.any()),
    Last_Modified: v.optional(v.any()),
    Created_By: v.optional(v.any()),
    Last_Modified_By: v.optional(v.any()),
    ID: v.optional(v.any()),
    Barcode: v.optional(v.any()),
    Open_URL: v.optional(v.any()),
    Rich_text: v.optional(v.string()),
  }).index("by_airtable_id", ["airtableId"]),
    messages: defineTable({ author: v.string(), body: v.string() , airtableId: v.optional(v.string())})
    // HAX dangit how do we get this to work with existing tables in your project??
    .index("by_airtable_id", ["airtableId"]),


});