module.exports = {
    getDeviceByServiceAndByDeviceSensor: `
      SELECT dt.*, d.identifier as eedomus_id
      FROM device d
      JOIN devicetype dt ON (d.id = dt.device)
      WHERE d.service = ?
      AND dt.sensor = true;
    `,
    
    
  };  