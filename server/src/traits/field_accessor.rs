use serde::{Serialize, de::DeserializeOwned};
use serde_json::Value;

pub trait FieldAccessor {
    fn get_value(&self, field_name: &str) -> Option<Value>;
}

impl<T: DeserializeOwned> FieldAccessor for T
where
    T: Serialize,
{
    fn get_value(&self, field_name: &str) -> Option<Value> {
        serde_json::to_value(self).ok()?.get(&field_name).cloned()
    }
}
